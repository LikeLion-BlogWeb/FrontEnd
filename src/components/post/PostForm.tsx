import { useContext, useEffect, useState } from "react";
import * as Styled from "../style/post/postform.style";
import { PostDataType } from "types/postlist.type";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { toast } from "react-toastify";
import MDEditor from "@uiw/react-md-editor";
import { formatDate } from "functions/post.function";
import useFetch from "hooks/useFetch";
import Loader from "components/common/Loader";
import { useTheme } from "functions/theme.function";

/**
 * Edit: parameter가 id
 * Detail: parameter가 new
 * @returns 게시글 쓰는 UI
 */
export default function PostForm() {
    const navigate = useNavigate();
    const params = useParams();
    const categoryTypes: string[] = ["프론트엔드", "벡엔드", "Devops", "자료구조", "알고리즘"];

    // 이전에 작성된 게시물인 경우는 post상태를 담아두고 수정하는 타이밍인지 새 글 작성인지 확인
    const [posting, setPosting] = useState<PostDataType | null>(null);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<any>("");
    const [category, setCategory] = useState<string>("");
    const { user: { email } } = useContext(AuthContext);
    const { loading, get, post, put } = useFetch();
    const [themeMode] = useTheme();

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        // 중첩 객체구조분해
        const { target : { name, value} } = e;
        
        switch(name) {
            case "title":
                setTitle(value);
                break;
            case "category":
                setCategory(value);
                break;
            default:
                break;
        }
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(posting && params.id) {
            const data = await put("post", {
                id: params.id,
                title,
                content,
                email,
                writeDate: formatDate(new Date()),
                likes: posting?.like,
                views: posting?.views,
                category,
            });

            if(data) {
                toast.success("게시물을 수정하였습니다.");
                // 메인 화면으로 다시 이동
                navigate("/");
            } else {
                toast.error("게시물 수정을 실패하였습니다.");
            }
        } else {
            const data = await post("post", {
                title,
                content,
                email,
                writeDate: formatDate(new Date()),
                category,
            });

            if(data) {
                toast.success("게시물을 생성하였습니다.");
                // 메인 화면으로 다시 이동
                navigate("/");
            } else {
                toast.error("게시물 업로드를 실패하였습니다.");
            }
        }
    }

    useEffect(() => {
        async function getPost() {
            if(params.id) {
                const data:PostDataType = await get(`post/${params.id}`);
                setPosting(data);
                setContent(data.content);
                setTitle(data.title);
                setCategory(data.category);
            }
        }

        getPost();
        
    // url의 id값이 변경될때 다시 호출
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id]);

    if(loading) {
        return <Loader />
    }

    return (
        <Styled.PostFormContainer onSubmit={onSubmit}>
            <Styled.PostFormInputWrapper>
                <Styled.PostFormLabel htmlFor="title">제목</Styled.PostFormLabel>
                <Styled.PostFormInput 
                    type="text"
                    name="title"
                    id="title"
                    required
                    value={title}
                    onChange={onChange}
                    style={{
                        width: "250px"
                    }}
                />
            </Styled.PostFormInputWrapper>

            <Styled.PostFormInputWrapper>
                <Styled.PostFormLabel htmlFor="category">카테고리</Styled.PostFormLabel>
                <Styled.PostFormSelect
                    name="category"
                    id="category"
                    required
                    defaultValue={category || ""}
                    onChange={onChange}
                >
                    <option value="">카테고리를 선택</option>
                    {
                        categoryTypes.map((categoryName, index: number) => {
                            return (
                                <option value={categoryName} key={index}>{categoryName}</option>
                            )
                        })
                    }
                </Styled.PostFormSelect>
            </Styled.PostFormInputWrapper>

            <Styled.PostFormInputWrapper data-color-mode={themeMode}>
                <h4 style={{display: "block", fontWeight: "500", marginBottom: "10px", marginTop:"20px"}}>내용</h4>
                <div id="markdown-area" className="markdown-area" >
                    <MDEditor value={content} onChange={setContent} />
                </div>
            </Styled.PostFormInputWrapper>

            <Styled.PostFormInputWrapper>
                <Styled.PostFormSubmitButton 
                    type="submit"
                    // 수정하려고 들어온 경우엔 버튼의 value값을 "수정"으로 -> ui에 표현
                    value={posting ? "수정" : "제출"}
                />
            </Styled.PostFormInputWrapper>
        </Styled.PostFormContainer>
    )
}