import { useState } from "react"
import { activeTabType } from "../types/home.type";
import { PostContainer, PostEtc, PostListContainer, PostNav, PostNavContainer, PostProfile, PostProfileContainer,PostProfileWrapperLink, PostText, PostTitle, PostUtilContainer, PostUtilDelete, PostUtilEdit } from "./style/postlist.style";

export default function PostList({activeNav = true}) {
    const [isActiveTab, setIsActiveTab] = useState<activeTabType>("all");

    return (
        <>
            {/* 내 글인지, 모두에게 보여지는 글인지 상태에 따라 결정 */}
            {
                activeNav && (
                    <PostNavContainer>
                        <PostNav
                            onClick={()=>setIsActiveTab("all")}
                            active={isActiveTab === 'all' ? 'active' : ''}
                        >전체</PostNav>
                        <PostNav
                            onClick={()=>setIsActiveTab("my")}
                            active={isActiveTab === 'my' ? 'active' : ''}
                        >내 글</PostNav>
                    </PostNavContainer>
                )
            }
            <PostListContainer>
                {
                    [...new Array(10)].map((value: any, idx: number) => (
                        <PostContainer key={idx}>
                            <PostProfileWrapperLink to={`/posts/${idx}`}>
                                <PostProfileContainer>
                                    <PostProfile />
                                    {/* 글 작성자 이름 & 작성 시간 */}
                                    <PostEtc>이시영</PostEtc>
                                    <PostEtc>2023년 11월 1일</PostEtc>
                                </PostProfileContainer>

                                <PostTitle>
                                    게시물 {idx}
                                </PostTitle>
                                <PostText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at mattis lectus. Nunc elementum tristique luctus. Vivamus a dolor sit amet arcu consectetur auctor. Suspendisse lobortis nec lacus at blandit. Cras vehicula eleifend enim, nec lobortis risus luctus non. Curabitur pharetra sapien in ipsum suscipit, nec lacinia sem consectetur. Nullam odio sem, finibus ac euismod eget, laoreet ut erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc quis risus urna. Mauris tempus rutrum sem eget vulputate. Donec placerat felis at tincidunt tempus. In neque lacus, scelerisque eget laoreet ac, pretium sit amet lorem. Mauris et molestie sapien. Cras non enim lectus.
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