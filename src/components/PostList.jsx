import { useEffect, useState } from "react"
import { PostContainer, PostEtc, PostListContainer, PostNav, PostNavContainer, PostProfile, PostProfileContainer,PostProfileWrapperLink, PostText, PostTitle, PostUtilContainer, PostUtilDelete, PostUtilEdit } from "./style/postlist.style";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";
import { BACK_URL } from "../url";

export default function PostList({
    hasNavigation = true, 
    defaultTab = "all"}
    ) {
    const [activeTab, setActiveTab] = useState(defaultTab);
    const [posts, setPosts] = useState([]);
    const {authToken} = useContext(AuthContext);

    useEffect(() => {
        const postData = async () => {
            try {
                // 응답값 : 포스트들 : 배열
                const response = await fetch(`//${BACK_URL}/post`, {
                    method: "GET",
                    headers: {
                        "Authorization": authToken
                    },
                });
                const data = await response.json();
    
                console.log(posts);
    
                setPosts(data);
            } catch(e) {
                console.log(e);
            }
        }

        postData();
    }, [authToken, posts]);

    return (
        <>
            {/* 내 글인지, 모두에게 보여지는 글인지 상태에 따라 결정 */}
            {
                hasNavigation && (
                    <PostNavContainer>
                        <PostNav
                            onClick={()=>setActiveTab("all")}
                            active={activeTab === 'all' ? 'active' : ''}
                        >전체</PostNav>
                        <PostNav
                            onClick={()=>setActiveTab("my")}
                            active={activeTab === 'my' ? 'active' : ''}
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
                                    <PostEtc>{`${post.writeDate.slice(0,9).replace(/-/g, '.')}`}</PostEtc>
                                </PostProfileContainer>

                                <PostTitle>
                                    {`${post.title}`}
                                </PostTitle>
                                <PostText>
                                    {`${post.content}`}
                                </PostText>  
                            </PostProfileWrapperLink>

                            <PostUtilContainer>
                                <PostUtilDelete>삭제</PostUtilDelete>
                                <PostUtilEdit>수정</PostUtilEdit>
                            </PostUtilContainer>
                        </PostContainer>
                    ))
                }
            </PostListContainer>
        </>
    )
}