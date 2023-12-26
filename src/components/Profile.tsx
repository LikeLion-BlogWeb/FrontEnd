import { useContext, useEffect } from "react";
import { ProfileContainer, ProfileEmail, ProfileFlexWrapper, ProfileImage, ProfileName } from "./style/profile.style";
import { AuthContext } from "context/AuthContext";

export default function Profile() {
    // 유효유저 토큰 들고 옴
    const {authToken, setAuthToken} = useContext(AuthContext);

    useEffect(()=> {
        
    }, [])

    return (
        <>
            <ProfileContainer>
                <ProfileFlexWrapper>
                    <ProfileImage />
                    <div>
                        <ProfileName></ProfileName>
                        <ProfileEmail></ProfileEmail>
                    </div>
                </ProfileFlexWrapper>
            </ProfileContainer>
        </> 
    )
}