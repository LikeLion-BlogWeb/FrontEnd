import { HeaderLink, HeaderLogoLink, StyledHeader } from "./style/header.style";

export default function Header() {
    return (
        <StyledHeader>
            <HeaderLogoLink to="/">
                LikeLion🦁
            </HeaderLogoLink>
            <div>
                <HeaderLink to="/posts/new">글쓰기</HeaderLink>
                <HeaderLink to="/posts">게시물</HeaderLink>
                <HeaderLink to="/profile">프로필</HeaderLink>
            </div>
        </StyledHeader>
    )
}