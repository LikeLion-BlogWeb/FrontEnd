import { useEffect, useState } from "react"
import * as Styled from "../style/post/postlist.style";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";
import { BACK_URL } from "../../util";
import { PostDataType } from "types/postlist.type";
import { toast } from "react-toastify";
import { getPostList } from "functions/post.function";
import More from "components/common/More";

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

    function filteringPosts(posts: PostDataType[]) {
        const template = (post: PostDataType) => 
        <>
            <Styled.PostContainer>
                <Styled.PostProfileWrapperLink to={`/posts/${post.id}`}>
                    <Styled.PostProfileContainer>
                        <Styled.PostProfile />
                        {/* 글 작성자 이름 & 작성 시간 */}
                        <Styled.PostEtc>이시영</Styled.PostEtc>
                        {/* 작성날짜 데이터 포맷 수정해서 UI에 표현 */}
                        <Styled.PostEtc>{`${post.writeDate.slice(0,10).replace(/-/g, '.')}`}</Styled.PostEtc>
                    </Styled.PostProfileContainer>
                    <Styled.PostImageContainer>
                        <Styled.PostImage />
                    </Styled.PostImageContainer>
                    <Styled.PostBody>
                        <Styled.PostTitle>
                            {`${post.title}`}
                        </Styled.PostTitle>
                        <Styled.PostText>
                            {/* 너무 길면 잘라냅니다 */}
                            {`${post.content}`.length < 50 ? post.content : `${post.content}`.slice(0,48).concat("...")}
                        </Styled.PostText>  
                    </Styled.PostBody>
                </Styled.PostProfileWrapperLink>
                {
                    userEmail === post.email && (
                        <>
                            <Styled.PostUtilContainer>
                                <Styled.PostUtilDelete onClick={() => deletePost(post.id, post)}>삭제</Styled.PostUtilDelete>
                                <br />
                                <Styled.PostUtilLink to={`/posts/edit/${post.id}`}>수정</Styled.PostUtilLink>
                            </Styled.PostUtilContainer>
                        </>
                    )
                }
            </Styled.PostContainer>
        </>

        // 모든 글 vs 내 글
        return activeTab === "all" ? posts.map(post => <div key={post.id}>{template(post)}</div>) : posts.filter(post => post.email === userEmail).map(post => <div key={post.id}>{template(post)}</div>);
    }

    // 첫 렌더링인 경우에만 실행하는 부분
    useEffect(() => {
        getPostList(authToken)
            .then((data) => setPosts(data))
            .catch((error) => console.error(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {/* 내 글인지, 모두에게 보여지는 글인지 상태에 따라 결정 */}
            {
                hasNavigation && (
                    <Styled.PostNavContainer>
                        <Styled.PostNav
                            onClick={()=>setActiveTab("all")}
                            $active={activeTab === 'all' ? 'active' : ''}
                        >전체</Styled.PostNav>
                        <Styled.PostNav
                            onClick={()=>setActiveTab("my")}
                            $active={activeTab === 'my' ? 'active' : ''}
                        >내 글</Styled.PostNav>
                    </Styled.PostNavContainer>
                )
            }
            <Styled.PostListContainer>
                {
                    posts && filteringPosts(posts)
                }
            </Styled.PostListContainer>
            <More />
        </>
    )
}