import { useEffect, useState } from "react"
import { PostContainer, PostEtc, PostListContainer, PostNav, PostNavContainer, PostProfile, PostProfileContainer, PostProfileWrapperLink, PostText, PostImageContainer, PostImage, PostBody, PostTitle, PostUtilContainer, PostUtilDelete, PostUtilLink } from "../style/postlist.style";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";
import { BACK_URL } from "../../url";
import { PostDataType } from "types/postlist.type";
import { toast } from "react-toastify";

export default function PostList({
    hasNavigation = true, 
    defaultTab = "all"}
    ) {
    const [activeTab, setActiveTab] = useState(defaultTab);
    const [posts, setPosts] = useState<PostDataType[]>([]);
    const { authToken, userEmail } = useContext(AuthContext);

    async function deletePost(id: number, post: PostDataType) {
        const checkConfirmBeforeDelete = window.confirm('정말 지우시겠습니까?');

        // 사용자가 삭제를 결정하고, 게시물이 존재하면 삭제 프로세스 시작
        if(checkConfirmBeforeDelete && post && post.id) {
            try {
                const response = await fetch(`${BACK_URL}/post/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": authToken
                    }
                });

                if(response.status === 200) {
                    toast.success("게시글을 삭제 완료했습니다.");
                    // 삭제되었음을 사용자가 확인하도록 post를 필터링해서 재렌더링
                    setPosts([...posts].filter((p) => p.id !== post.id));
                } else {
                    toast.error("게시글 삭제를 실패했습니다.");
                }
            } catch(error) {
                console.log("Error while delete post: ", error)
            }
        }
    }

    // 첫 렌더링인 경우에만 실행하는 부분
    useEffect(() => {
        const postData = async () => {
            try {
                // 응답값 : 포스트들 : 배열
                const response = await fetch(`${BACK_URL}/post`, {
                    method: "GET",
                    headers: {
                        "Authorization": authToken
                    },
                });
                const data = await response.json();
    
                setPosts(data);
            } catch(e) {
                console.log(e);
            }
        }

        postData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {/* 내 글인지, 모두에게 보여지는 글인지 상태에 따라 결정 */}
            {
                hasNavigation && (
                    <PostNavContainer>
                        <PostNav
                            onClick={()=>setActiveTab("all")}
                            $active={activeTab === 'all' ? 'active' : ''}
                        >전체</PostNav>
                        <PostNav
                            onClick={()=>setActiveTab("my")}
                            $active={activeTab === 'my' ? 'active' : ''}
                        >내 글</PostNav>
                    </PostNavContainer>
                )
            }
            <PostListContainer>
                {
                    posts && posts.map((post, idx) => (
                        <PostContainer key={idx}>
                            <PostProfileWrapperLink to={`/posts/${post.id}`}>
                                <PostProfileContainer>
                                    <PostProfile />
                                    {/* 글 작성자 이름 & 작성 시간 */}
                                    <PostEtc>이시영</PostEtc>
                                    {/* 작성날짜 데이터 포맷 수정해서 UI에 표현 */}
                                    <PostEtc>{`${post.writeDate.slice(0,10).replace(/-/g, '.')}`}</PostEtc>
                                </PostProfileContainer>
                                <PostImageContainer>
                                    <PostImage />
                                </PostImageContainer>
                                <PostBody>
                                    <PostTitle>
                                        {`${post.title}`}
                                    </PostTitle>
                                    <PostText>
                                        {/* 너무 길면 잘라냅니다 */}
                                        {`${post.content}`.length < 50 ? post.content : `${post.content}`.slice(0,68).concat("...")}
                                    </PostText>  
                                </PostBody>
                                
                            </PostProfileWrapperLink>
                            {
                                userEmail === post.email && (
                                    <>
                                        <PostUtilContainer>
                                            <PostUtilDelete onClick={() => deletePost(post.id, post)}>삭제</PostUtilDelete>
                                            <br />
                                            <PostUtilLink to={`/posts/edit/${post.id}`}>수정</PostUtilLink>
                                        </PostUtilContainer>
                                    </>
                                )
                            }
                        </PostContainer>
                    ))
                }
            </PostListContainer>
        </>
    )
}