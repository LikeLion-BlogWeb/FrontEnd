import { AuthContext } from "context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { PostDataType } from "types/postlist.type";
import * as Styled from "../style/post/postdetail.style";
import { toast } from "react-toastify";
import { PostTitle } from "../style/post/postlist.style";
import MDEditor from "@uiw/react-md-editor";
import useFetch from "hooks/useFetch";
import Loader from "components/common/Loader";
import { useTheme } from "functions/theme.function";

export default function PostDetail({id}: {id: string}) {
    const [post, setPost] = useState<PostDataType | null>(null);
    const { user: { email } } = useContext(AuthContext);
    const navigate = useNavigate();
    const { loading, get, del } = useFetch();
    const [themeMode] = useTheme();

    async function deletePost(id: number): Promise<void> {
        const checkConfirmBeforeDelete = window.confirm('정말 지우시겠습니까?');

        // 사용자가 삭제를 결정하고, 게시물이 존재하면 삭제 프로세스 시작
        if(checkConfirmBeforeDelete && post && post.id) {
            const deleteResult = await del(`post/${id}`);

            if(deleteResult) {
                toast.success("게시글을 삭제 완료했습니다.");
                // PostList로 돌아가기
                navigate("/");
            } else {
                toast.error("게시글 삭제를 실패했습니다.");
            }
        }
    }
    
    // 마운트 시점에 한 번만 : id가 존재하면 -> post데이터와를 들고와서, state에 넣어줍니다.
    useEffect(() => {
        async function getPost() {
            if(id) {
                const data = await get(`post/${id}`);
                setPost(data);
            }
        }

        getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(!id) {
        return <h1>ID값을 전달받지 못했습니다.</h1>
    } else if(loading) {
        return <Loader />
    }

    return (
        <>
            <Styled.PostDetailContainer>
                {
                    post && (
                        <>
                            <Styled.PostDetailWrapper>
                                <PostTitle>{post?.title}</PostTitle>
                                <Styled.PostProfileWrapper>
                                    <Styled.PostProfile />
                                    <Styled.PostAuthorName>{post?.user.name}</Styled.PostAuthorName>
                                    {/* ex) 2023-11-02T00:57:24 */}
                                    <Styled.PostDate>{post?.writeDate.split('T').join(' ')}</Styled.PostDate>
                                </Styled.PostProfileWrapper>
                                <Styled.PostUtilsWrapper>
                                    {
                                        post.category && (
                                            <Styled.PostCategory>{post.category}</Styled.PostCategory>
                                        )
                                    }
                                    {/* 작성자 이메일과 동일하면 삭제 아이콘도 뜨도록 설정 */}
                                    {   
                                        post?.user.email === email && (
                                            <div style={{display: "flex", gap: "7px"}}>
                                                <Styled.PostEdit>
                                                    <Styled.PostEditLink to={`/posts/edit/${id}`}>수정</Styled.PostEditLink>
                                                </Styled.PostEdit>
                                                <br />
                                                <Styled.PostDelete role="presentation" onClick={() => deletePost(post?.id)}>삭제</Styled.PostDelete>
                                            </div>
                                        ) 
                                    }
                                    <Styled.PostTextWrapper data-color-mode={themeMode}>
                                        <MDEditor.Markdown source={post?.content} style={{
                                            padding: "20px 20px 20px 0",
                                            borderRadius: "5px",
                                        }}/>
                                    </Styled.PostTextWrapper>
                                </Styled.PostUtilsWrapper>
                            </Styled.PostDetailWrapper>
                        </>
                    )
                }
            </Styled.PostDetailContainer>
        </>
    )
}