import { FooterLink, StyleFooter } from "./style/footer.style";

export default function Footer() {
    return (
        <StyleFooter>
            <FooterLink to="posts/new">글쓰기</FooterLink>
            <FooterLink to="posts">게시물</FooterLink>
            <FooterLink to="profile">프로필</FooterLink>
        </StyleFooter>
    )
}