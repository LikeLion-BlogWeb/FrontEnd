import { HeaderLink, HeaderLogoLink, StyledHeader } from "../style/header.style";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from 'context/AuthContext';

export default function Header({ 
    // default prop값으로 true를 줘서, 로그인 링크에만 default값을 통해 보이기 유무 적용 -> props로 굳이 일일이 전달하지 않더라도 더 유연하게 대처 가능 -> 확장성 높아짐
    isAuthenticationPage = true
    } : { isAuthenticationPage?: boolean}) {
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
                {/* 로그인, 글쓰기, 프로필 기능은 로그인 인증이 된 경우에만 보이도록 해주기 */}
                <HeaderLink to="/posts" displayattr={isAuthenticated ? "true" : "false"}>게시물</HeaderLink>
                <HeaderLink to="/posts/new" displayattr={isAuthenticated ? "true" : "false"}>글쓰기</HeaderLink>
                <HeaderLink to="/profile" displayattr={isAuthenticated ? "true" : "false"}>프로필</HeaderLink>
                {/* 로그인 인증이 된 경우 or 로그인/회원가입 경우에만 안 보이도록 해줘야함 */}
                <HeaderLink to="/signin" displayattr={isAuthenticated || isAuthenticationPage ? "false" : "true"}>로그인</HeaderLink>
            </div>
        </StyledHeader>
    )
}