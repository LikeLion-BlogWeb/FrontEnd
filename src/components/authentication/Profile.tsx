import { useContext } from "react";
import * as Styled from "../style/authentication/profile.style";
import { AuthContext } from "context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    // 유효유저 토큰 들고 옴
    const { token: { setAuthToken }, user: { email, name, setEmail, setName }} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignOut = () => {
        try {
            // 인증토큰과 유저 이메일을 다 날리기
            setAuthToken("");
            setEmail("");
            setName("");
            toast.success("로그아웃에 성공하였습니다");
            navigate("/");
        } catch {
            toast.error("로그아웃에 실패하였습니다");
        }
    }

    return (
        <>
            <Styled.ProfileContainer>
                <Styled.ProfileFlexWrapper>
                    <Styled.ProfileImage />
                    <div>
                        <Styled.ProfileName>{name || "이름 불러오기 실패"}</Styled.ProfileName>
                        <Styled.ProfileEmail>{email || "이메일 불러오기 실패"}</Styled.ProfileEmail>
                    </div>
                </Styled.ProfileFlexWrapper>
                <Styled.ProfileLogoutDiv role="presentation" onClick={handleSignOut}>로그아웃</Styled.ProfileLogoutDiv>
            </Styled.ProfileContainer>
        </> 
    )
}