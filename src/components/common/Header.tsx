import * as Styled from "../style/common/header.style";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from 'context/AuthContext';

export default function Header() {
    const { authToken } = useContext(AuthContext);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
		// authToken의 존재여부에 따라 true or false로 상태변경
		setIsAuthenticated(!!authToken);
	}, [authToken]);

    return (
        <Styled.Header>
            <Styled.HeaderLogoLink to="/">
                LikeLion🦁
            </Styled.HeaderLogoLink>
            <div>
                {/* 로그인, 글쓰기, 프로필 기능은 로그인 인증이 된 경우에만 보이도록 해주기 */}
                {/* 게시물은 로그인 여부와 상관없이 필요 */}
                <Styled.HeaderLink to="/posts" displayattr={"true"}>게시물</Styled.HeaderLink>
                <Styled.HeaderLink to="/posts/new" displayattr={isAuthenticated ? "true" : "false"}>글쓰기</Styled.HeaderLink>
                <Styled.HeaderLink to="/profile" displayattr={isAuthenticated ? "true" : "false"}>프로필</Styled.HeaderLink>
                {/* 로그인 인증이 된 경우 or 로그인/회원가입 경우에만 안 보이도록 해줘야함 */}
                {/* 이 경우엔 로그인 인증이 된 경우엔 안 보이고, 안 된 경우엔 보이는 구조(reverse)*/}
                <Styled.HeaderLink to="/signin" displayattr={!isAuthenticated ? "true" : "false"}>로그인</Styled.HeaderLink>
            </div>
        </Styled.Header>
    )
}