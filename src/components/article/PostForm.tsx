import { useContext, useEffect, useState } from "react";
import { PostFormContainer, PostFormInput, PostFormInputWrapper, PostFormLabel, PostFormSelect, PostFormSubmitButton, PostFormTextarea } from "../style/postform.style";
import { PostProps } from "types/postlist.type";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { BACK_URL } from "../../url";
import { toast } from "react-toastify";

function formatDate(date: Date) : string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

/**
 * Edit: parameter가 id
 * Detail: parameter가 new
 * @returns 게시글 쓰는 UI
 */
export default function PostForm() {
    const navigate = useNavigate();
    const params = useParams();

    // 이전에 작성된 게시물인 경우는 post상태를 담아두고 수정하는 타이밍인지 새 글 작성인지 확인
    const [post, setPost] = useState<PostProps | null>(null);
    const [title, setTitle] = useState<string>("");
    // 콘텐츠(메인 글)는 사용자가 많이 입력하므로, 객체로 묶어서 관리하기보다는 별도의 상태들로 쪼개서 관리
    const [content, setContent] = useState<any>("");
    const [category] = useState<string>("프론트엔드");
    const { authToken, userEmail } = useContext(AuthContext);

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        // 중첩 객체구조분해
        const { target : { name, value} } = e;
        
        switch(name) {
            case "title":
                setTitle(value);
                break;
            case "category":
                // 나중에 카테고리 영역이 생기면 추후에 더 작업할 것
                break;
            case "content":
                setContent(value);
                break;
            default:
                break;
        }
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {   
            if(post && post?.id) {
                // 기존 게시물을 수정하는 경우의 내용 : PUT
                const response = await fetch(`${BACK_URL}/post`.replace("kmu-likelion-blog.netlify.app/", ""), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": authToken,
                    },
                    body: JSON.stringify({
                        id: params.id,
                        title,
                        content,
                        email: userEmail,   
                        writeDate: formatDate(new Date()),
                        likes: post?.like,
                        views: post?.views
                    })
                });    
                if(response.status === 201) {
                    toast.success("게시물을 수정하였습니다.");
                    // 메인 화면으로 다시 이동
                    navigate("/");
                } else {
                    toast.error("게시물 수정을 실패하였습니다.");
                }
            } else {
                // 새로 게시물을 업로드하는 경우의 내용 : POST
                const response = await fetch(`${BACK_URL}/post`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": authToken,
                    },
                    body: JSON.stringify({
                        title,
                        content,
                        email: userEmail,
                        writeDate: formatDate(new Date())
                    })
                });
    
                if(response.status === 201) {
                    toast.success("게시물을 생성하였습니다.");
                    // 메인 화면으로 다시 이동
                    navigate("/");
                } else {
                    toast.error("게시물 업로드를 실패하였습니다.");
                }
            }
        } catch(error) {
            console.log(`submit에러: ${error}`);
        }
    }

    const getPost = async (id: string) => {
            if(id) {
                const response = await fetch(`//${BACK_URL}/post/${id}`, {
                    method: "GET",
                    headers: {
                        "Authorization": authToken
                    }
                });
                const postData = await response.json();
                setPost(postData);
            }
    }

    useEffect(() => {
        // 
        if(params?.id) {
            // 게시물이 존재하면 post훅을 설정하고
            getPost(params?.id);
            // 기존 게시물의 내용물을 content훅 내용으로 설정 -> textarea-value에 연결되어있음
            setContent(post?.content);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PostFormContainer onSubmit={onSubmit}>
            <PostFormInputWrapper>
                <PostFormLabel htmlFor="title">제목</PostFormLabel>
                <PostFormInput 
                    type="text"
                    name="title"
                    id="title"
                    required
                    value={title}
                    onChange={onChange}
                />
            </PostFormInputWrapper>

            <PostFormInputWrapper>
                <PostFormLabel htmlFor="category">카테고리</PostFormLabel>
                <PostFormSelect
                    name="category"
                    id="category"
                    required
                    defaultValue={category}
                    onChange={onChange}
                >
                    <option value="">카테고리를 선택</option>
                    {
                        // 나중에 카테고리 영역이 생기면 바꿀 것
                        <option value={category}>{category}</option>
                    }
                </PostFormSelect>
            </PostFormInputWrapper>

            <PostFormInputWrapper>
                <PostFormLabel htmlFor="content">내용</PostFormLabel>
                <PostFormTextarea 
                    name="content"
                    id="content"
                    required
                    // 사용자 input으로 들어온 컨텐츠 or 불러온 게시물 수정의 기존 내용
                    value={content}
                    onChange={onChange}
                />
            </PostFormInputWrapper>

            <PostFormInputWrapper>
                <PostFormSubmitButton 
                    type="submit"
                    // 수정하려고 들어온 경우엔 버튼의 value값을 "수정"으로 -> ui에 표현
                    value={post ? "수정" : "제출"}
                />
            </PostFormInputWrapper>
        </PostFormContainer>
    )
}