import { HeaderLink, HeaderLoginLink, HeaderLogoLink, StyledHeader } from "../style/header.style";
import { useContext, useState } from "react";
import { AuthContext } from "context/AuthContext";

export default function Header({
    linkTextDisplay = false
    }: { linkTextDisplay: boolean }) {
    const { authToken, userEmail } = useContext(AuthContext);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

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
                {/* home 화면과 login 화면의 접근제한을 바꾸어야 토큰이 날아가서 작동하는게 보일 듯 */}
            </div>
        </StyledHeader>
    )
}