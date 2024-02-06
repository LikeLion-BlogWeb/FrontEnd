import { HeaderLink, HeaderLoginLink, HeaderLogoLink, StyledHeader } from "../style/header.style";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from 'context/AuthContext';

export default function Header({
    linkTextDisplay = false
    }: { linkTextDisplay: boolean }) {
    const { authToken, userEmail } = useContext(AuthContext);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    useEffect(() => {
		// authToken의 존재여부에 따라 true or false로 상태변경
		setIsAuthenticated(!!authToken);
	}, [authToken]);
    const handleLogin = () => {
        // 로그인 처리를 수행한 후
        // 로그인 상태를 변경합니다.
        setIsAuthenticated(true);
    };

    return (
        <StyledHeader>
            <HeaderLogoLink to="/">
                LikeLion🦁
            </HeaderLogoLink>
            <div>
                <HeaderLink to="/posts/new" displayattr={linkTextDisplay ? "true" : "false"}>글쓰기</HeaderLink>
                <HeaderLink to="/posts" displayattr={linkTextDisplay ? "true" : "false"}>게시물</HeaderLink>
                <HeaderLink to="/profile" displayattr={linkTextDisplay ? "true" : "false"}>프로필</HeaderLink>
                <HeaderLoginLink to="/signin" displayattr={linkTextDisplay ? "true" : "false"}>로그인</HeaderLoginLink>
                {/* 로그인 했을 때 login 버튼이 보이지 않도록 수정 필요 */}
            </div>
        </StyledHeader>
    )
}