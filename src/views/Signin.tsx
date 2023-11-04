import { useState } from "react"
import { ErrorMsgContainer, FormInnerWrapper, LoginInput, LoginSubmitInput, LoginTitle, StyledForm, StyledLabel, StyledLink } from "../components/style/signin.style";

export default function Signin() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {
          target: { name, value },
        } = e;
    
        if (name === "email") {
          setEmail(value);
    
          const validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
          if (!value?.match(validRegex)) {
            setError("이메일 형식이 올바르지 않습니다.");
          } else {
            setError("");
          }
        }
    
        if (name === "password") {
          setPassword(value);
    
          if (value?.length < 8) {
            setError("비밀번호는 8자리 이상 입력해주세요");
          } else {
            setError("");
          }
        }
      };

    // 비동기 함수 : todo list : 토큰 방식으로 인증
    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();


    }

    return (
        <>
            <StyledForm>
                <LoginTitle>로그인</LoginTitle>
                <FormInnerWrapper>
                    <StyledLabel htmlFor="email">이메일</StyledLabel>
                    <LoginInput 
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={email}
                        onChange={onChange}
                    />
                </FormInnerWrapper>
                <FormInnerWrapper>
                    <StyledLabel htmlFor="password">비밀번호</StyledLabel>
                    <LoginInput 
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={password}
                        onChange={onChange}
                    />
                </FormInnerWrapper>
                {
                    error && error.length > 0 && (
                        <FormInnerWrapper>
                            <ErrorMsgContainer>{error}</ErrorMsgContainer>
                        </FormInnerWrapper>
                    )
                }
                <FormInnerWrapper>
                    계정이 없으신가요?
                    <StyledLink to="/signup">
                        회원가입하기
                    </StyledLink>
                </FormInnerWrapper>
                <FormInnerWrapper>
                    <LoginSubmitInput 
                        type="submit"
                        value="로그인"
                        disabled={error?.length > 0}
                    />
                </FormInnerWrapper>
            </StyledForm>
        </>
    )
}