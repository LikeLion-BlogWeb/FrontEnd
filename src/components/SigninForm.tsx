import { useContext, useState } from "react"
import { ErrorMsgContainer, FormInnerWrapper, LoginAndRegisterTitle, LoginInput, LoginSubmitButton, StyledForm, StyledLabel, StyledLink } from "./style/signin_up.style";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BACK_URL } from "../url";
import { AuthContext } from "context/AuthContext";

export default function SigninForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const { setAuthToken, setUserEmail } = useContext(AuthContext);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      // deconstructing object
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
      
      try {
        // 서버로부터의 응답
        const response = await fetch(`${BACK_URL}/auth/signin`.replace("kmu-likelion-blog.netlify.app/", ""), {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email,
            password: password,
          })
        });
        
        // 서버로부터 응답받은 내용을 json화한 데이터
        const data = await response.json();

        if(data?.token) {
            toast.success("로그인에 성공했습니다");
            // 유저의 토큰과 이메일을 전역상태 관리에 올리기
            setAuthToken(data?.token);
            setUserEmail(data?.email);
            // 응답으로 넘어온 토큰이 존재하면 context 상태관리에 토큰값 전달
            navigate("/");
        } else {
          toast.error("회원가입을 우선 해주세요!");
        }
      } catch(err: any) {
        toast.error(err?.code);
        console.log(err);
      }
    }

    return (
        <>
            <StyledForm onSubmit={onSubmit}>
                <LoginAndRegisterTitle>로그인</LoginAndRegisterTitle>
                <FormInnerWrapper>
                    <StyledLabel htmlFor="email">이메일</StyledLabel>
                    <LoginInput 
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={email}
                        onChange={onChange}
                        autoComplete="off"
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
                        autoComplete="off"
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
                    <LoginSubmitButton 
                        type="submit"
                        value="로그인"
                        disabled={error?.length > 0}
                    >로그인</LoginSubmitButton>
                </FormInnerWrapper>
            </StyledForm>
        </>
    )
}