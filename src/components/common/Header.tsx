import { HeaderLink, HeaderLoginLink, HeaderLogoLink, StyledHeader } from "../style/header.style";

export default function Header({
    linkTextDisplay = false
    }: { linkTextDisplay: boolean }) {

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