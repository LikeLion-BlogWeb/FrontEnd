import { AuthContext } from "context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { PostProps } from "types/postlist.type";
import { BACK_URL } from "../../url";
import { PostAuthorName, PostCategory, PostDate, PostDelete, PostDetailContainer, PostDetailWrapper, PostEdit, PostEditLink, PostProfile, PostProfileWrapper, PostTextWrapper, PostUtilsWrapper } from "../style/postdetail.style";
import { toast } from "react-toastify";
import { PostTitle } from "../style/postlist.style";

export default function PostDetail() {
    const [post, setPost] = useState<PostProps | null>(null);
    // context api에서의 value는 authToken, setAuthToken 두가지가 있음
    // 객체구조분해를 통해 authToken만 변수로 꺼내와서 사용
    const { authToken, userEmail } = useContext(AuthContext);
    // postDetail의 param은 post의 id
    const params = useParams();
    const navigate = useNavigate();

    // id기반으로 서버로부터 데이터 얻어냅니다
    async function getPost(id: string) {
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

    async function deletePost(id: any) {
        const checkConfirmBeforeDelete = window.confirm('정말 지우시겠습니까?');

        // 사용자가 삭제를 결정하고, 게시물이 존재하면 삭제 프로세스 시작
        if(checkConfirmBeforeDelete && post && post.id) {
            const response = await fetch(`//${BACK_URL}/post/${id}`, {
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
        if(params?.id) {
            getPost(params?.id);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                                    <PostDate>{post?.writeDate}</PostDate>
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
                                                    <PostEditLink to={`/posts/edit/${params?.id}`}>수정</PostEditLink>
                                                </PostEdit>
                                                <PostDelete role="presentation" onClick={() => deletePost(params)}>삭제</PostDelete>
                                            </div>
                                        ) 
                                    }
                                    <PostTextWrapper>
                                        {post?.content}
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