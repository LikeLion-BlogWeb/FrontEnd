import { useContext } from "react";
import { ProfileContainer, ProfileEmail, ProfileFlexWrapper, ProfileImage, ProfileLogoutDiv, ProfileName } from "../style/profile.style";
import { AuthContext } from "context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    // 유효유저 토큰 들고 옴
    const {setAuthToken, userEmail, setUserEmail} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        try {
            // 인증토큰과 유저 이메일을 다 날리기
            setAuthToken("");
            setUserEmail("");
            toast.success("로그아웃에 성공하였습니다");
            navigate("/");
        } catch {
            toast.error("로그아웃에 실패하였습니다");
        }
    }

    return (
        <>
            <ProfileContainer>
                <ProfileFlexWrapper>
                    <ProfileImage />
                    <div>
                        <ProfileName>유저</ProfileName>
                        <ProfileEmail>{userEmail}</ProfileEmail>
                    </div>
                </ProfileFlexWrapper>
                <ProfileLogoutDiv role="presentation" onClick={handleSignOut}>로그아웃</ProfileLogoutDiv>
            </ProfileContainer>
        </> 
    )
}