import { useEffect, useState } from "react"
import * as Styled from "../style/post/postlist.style";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";
import { PostDataType } from "types/postlist.type";
import { toast } from "react-toastify";
import More from "components/common/More";
import useFetch from "hooks/useFetch";
import Loader from "components/common/Loader";

export default function PostList({
    hasNavigation = true, 
    defaultTab = "all"
    }) {
    const [activeTab, setActiveTab] = useState(defaultTab);
    const [posts, setPosts] = useState<PostDataType[]>([]);
    const { user: { email } } = useContext(AuthContext);
    const { loading, get, del } = useFetch();

    async function deletePost(id: number, post: PostDataType) {
        const checkConfirmBeforeDelete = window.confirm('정말 지우시겠습니까?');

        // 사용자가 삭제를 결정하고, 게시물이 존재하면 삭제 프로세스 시작
        if(checkConfirmBeforeDelete && post && post.id) {
            const deleteResult = await del(`post/${id}`);
            if(deleteResult) {
                toast.success("게시글을 삭제 완료했습니다.");
                // 삭제되었음을 사용자가 확인하도록 post를 필터링해서 재렌더링
                setPosts([...posts].filter((p) => p.id !== post.id));
            } else {
                toast.error("게시글 삭제를 실패했습니다.");
            }
        }
    }

    function filteringPosts(posts: PostDataType[]) {
        const template = (post: PostDataType) => (
            <Styled.PostContainer>
                <Styled.PostProfileWrapperLink to={`/posts/${post.id}`}>
                    <Styled.PostProfileContainer>
                        <Styled.PostProfile />
                        {/* 글 작성자 이름 & 작성 시간 */}
                        <Styled.PostEtc>{post.user.name}</Styled.PostEtc>
                        {/* 작성날짜 데이터 포맷 수정해서 UI에 표현 */}
                        <Styled.PostEtc>{`${post.writeDate.slice(0,10).replace(/-/g, '.')}`}</Styled.PostEtc>
                    </Styled.PostProfileContainer>
                    <Styled.PostImageContainer>
                        <Styled.PostImage />
                    </Styled.PostImageContainer>
                    <Styled.PostBody>
                        <Styled.PostTitle>
                            {`${post.title}`.length > 10 ? `${post.title}`.slice(0,10).concat("...") : `${post.title}`}
                        </Styled.PostTitle>
                        <Styled.PostText>
                            {/* 너무 길면 잘라냅니다 */}
                            {`${post.content}`.length < 12 ? post.content : `${post.content}`.slice(0,12).concat("...")}
                        </Styled.PostText>  
                    </Styled.PostBody>
                </Styled.PostProfileWrapperLink>
                {
                    email === post.user.email && (
                        <More post={post} deleteFn={deletePost} key={post.id}/>
                    )
                }
            </Styled.PostContainer>
        )

        // 모든 글 vs 내 글
        return activeTab === "all" ? posts.map(post => <div key={post.id}>{template(post)}</div>) : posts.filter(post => post.user.email === email).map(post => <div key={post.id}>{template(post)}</div>);
    }

    // 첫 렌더링인 경우에만 실행하는 부분
    useEffect(() => {
        async function getPostList() {
            const data:PostDataType[] = await get("post");
            setPosts(data);
        }
        
        getPostList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(loading) {
        return <Loader />
    }

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
        </>
    )
}