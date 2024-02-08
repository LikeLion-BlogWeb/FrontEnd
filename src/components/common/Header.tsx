import { HeaderLink, HeaderLoginLink, HeaderLogoLink, StyledHeader } from "../style/header.style";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from 'context/AuthContext';

export default function Header({
    linkTextDisplay = false
    }: { linkTextDisplay: boolean }) {
    const { authToken } = useContext(AuthContext);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    useEffect(() => {
		// authToken의 존재여부에 따라 true or false로 상태변경
		setIsAuthenticated(!!authToken);
	}, [authToken]);

    return (
        <StyledHeader>
            <HeaderLogoLink to="/">
                LikeLion🦁
            </HeaderLogoLink>
            <div>
                <HeaderLink to="/posts/new" displayattr={linkTextDisplay || isAuthenticated ? "true" : "false"}>글쓰기</HeaderLink>
                <HeaderLink to="/posts" displayattr={linkTextDisplay || isAuthenticated ? "true" : "false"}>게시물</HeaderLink>
                <HeaderLink to="/profile" displayattr={linkTextDisplay || isAuthenticated ? "true" : "false"}>프로필</HeaderLink>
                <HeaderLoginLink to="/signin" displayattr={isAuthenticated ? "true" : "false"}>로그인</HeaderLoginLink>
                {/* 로그인 했을 때 login 버튼이 보이지 않도록 수정 필요 */}
            </div>
        </StyledHeader>
    )
}