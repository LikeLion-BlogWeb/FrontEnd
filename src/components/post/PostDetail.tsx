import { AuthContext } from "context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { PostDataType } from "types/postlist.type";
import { BACK_URL } from "../../util";
import { PostAuthorName, PostCategory, PostDate, PostDelete, PostDetailContainer, PostDetailWrapper, PostEdit, PostEditLink, PostProfile, PostProfileWrapper, PostTextWrapper, PostUtilsWrapper } from "../style/post/postdetail.style";
import { toast } from "react-toastify";
import { PostTitle } from "../style/post/postlist.style";
import MDEditor from "@uiw/react-md-editor";
import { getPost } from "functions/post.function";

export default function PostDetail({id}: {id: string}) {
    const [post, setPost] = useState<PostDataType | null>(null);
    // context api에서의 value는 authToken, setAuthToken 두가지가 있음
    // 객체구조분해를 통해 변수로 꺼내와서 사용
    const { authToken, userEmail } = useContext(AuthContext);
    const navigate = useNavigate();

    async function deletePost(id: number): Promise<void> {
        const checkConfirmBeforeDelete = window.confirm('정말 지우시겠습니까?');

        // 사용자가 삭제를 결정하고, 게시물이 존재하면 삭제 프로세스 시작
        if(checkConfirmBeforeDelete && post && post.id) {
            const response = await fetch(`${BACK_URL}/post/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": authToken
                }
            });

            if(response.status === 200) {
                toast.success("게시글을 삭제 완료했습니다.");
                // PostList로 돌아가기
                navigate("/");
            } else {
                toast.error("게시글 삭제를 실패했습니다.");
            }
        }
    }
    
    useEffect(() => {
        if(id) {
            getPost(id, authToken)
                .then((data) => setPost(data))
                .catch((error) => console.error(error));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(!id) {
        return <h1>ID값을 전달받지 못했습니다.</h1>
    }

    return (
        <>
            <PostDetailContainer>
                {
                    post && (
                        <>
                            <PostDetailWrapper>
                                <PostTitle>{post?.title}</PostTitle>
                                <PostProfileWrapper>
                                    <PostProfile />
                                    <PostAuthorName>{post?.email}</PostAuthorName>
                                    {/* ex) 2023-11-02T00:57:24 */}
                                    <PostDate>{post?.writeDate.split('T').join(' ')}</PostDate>
                                </PostProfileWrapper>
                                <PostUtilsWrapper>
                                    <PostCategory>
                                        {/* 추후에 추가될 수 있는 부분 */}
                                        자유주제
                                    </PostCategory>
                                    {/* 작성자 이메일과 동일하면 삭제 아이콘도 뜨도록 설정 */}
                                    {   
                                        post?.email === userEmail && (
                                            <div style={{display: "flex", gap: "7px"}}>
                                                <PostEdit>
                                                    <PostEditLink to={`/posts/edit/${id}`}>수정</PostEditLink>
                                                </PostEdit>
                                                <br />
                                                <PostDelete role="presentation" onClick={() => deletePost(post?.id)}>삭제</PostDelete>
                                            </div>
                                        ) 
                                    }
                                    <PostTextWrapper>
                                        <MDEditor.Markdown source={post?.content} style={{
                                            padding: "20px 20px 20px 0",
                                            borderRadius: "5px",
                                            backgroundColor: "white",
                                            color: "black",
                                        }}/>
                                    </PostTextWrapper>
                                </PostUtilsWrapper>
                                {/* 댓글 기능? */}
                            </PostDetailWrapper>
                        </>
                    )
                }
            </PostDetailContainer>
        </>
    )
}