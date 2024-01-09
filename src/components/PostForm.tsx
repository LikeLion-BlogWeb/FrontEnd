import { useContext, useState } from "react";
import { PostFormContainer, PostFormInput, PostFormInputWrapper, PostFormLabel, PostFormSelect, PostFormSubmitButton, PostFormTextarea } from "./style/postform.style";
import { PostProps } from "types/postlist.type";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "context/AuthContext";

export default function PostForm() {
    const navigate = useNavigate();
    const params = useParams();

    // 이전에 작성된 게시물인 경우는 post상태를 담아두고 수정하는 타이밍인지 새 글 작성인지 확인
    const [post, setPost] = useState<PostProps | null>(null);
    const [title, setTitle] = useState<string>("");
    // 콘텐츠(메인 글)는 사용자가 많이 입력하므로, 객체로 묶어서 관리하기보다는 별도의 상태들로 쪼개서 관리
    const [content, setContent] = useState<string>("");
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

    const onSubmit = () => {

    }

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
                    value={content}
                    onChange={onChange}
                />
            </PostFormInputWrapper>

            <PostFormInputWrapper>
                <PostFormSubmitButton 
                    type="submit"
                    value={post ? "수정" : "제출"}
                />
            </PostFormInputWrapper>
        </PostFormContainer>
    )
}