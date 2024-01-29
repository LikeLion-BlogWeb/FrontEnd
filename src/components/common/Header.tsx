import { HeaderLink, HeaderLogoLink, StyledHeader } from "../style/header.style";

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
            </div>
        </StyledHeader>
    )
}