import { useContext, useState } from "react"
import * as Styled from "../style/authentication/signin_up.style";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { ResponseDataType, SubmitDataType } from "types/authentication/signin.type";
import useFetch from "hooks/useFetch";
import Loader from "components/common/Loader";

export default function SigninForm() {
    const navigate = useNavigate();
    const [formEmail, setFormEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const { user: { setEmail, setName }, token: { setAuthToken } } = useContext(AuthContext);
    // custom hook
    const { loading, fetchError, post } = useFetch()

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      // deconstructing object
        const {
          target: { name, value },
        } = e;
    
        if (name === "email") {
          setFormEmail(value);

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
      
      const SENDING_DATA: SubmitDataType = {
        email: formEmail,
        password: password,
      }

      const data: ResponseDataType = await post("auth/signin", SENDING_DATA);

      if(data.token) {
          toast.success("로그인에 성공했습니다");
          // 유저의 토큰과 이메일을 전역상태 관리에 올리기
          setAuthToken(data.token);
          setEmail(data.email);
          setName(data.name);
          // 응답으로 넘어온 토큰이 존재하면 context 상태관리에 토큰값 전달
          navigate("/");
      } else {
        toast.error("회원가입을 우선 해주세요!");
      }
    }

    if(loading) {
      return <Loader />
    }

    if(fetchError) {
      return <p>{fetchError}</p>
    }

    return (
        <>
            <Styled.AuthenticationForm onSubmit={onSubmit}>
                <Styled.LoginAndRegisterTitle>로그인</Styled.LoginAndRegisterTitle>
                <Styled.FormInnerWrapper>
                    <Styled.AuthenticationLabel htmlFor="email">이메일</Styled.AuthenticationLabel>
                    <Styled.LoginInput 
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formEmail}
                        onChange={onChange}
                        autoComplete="off"
                    />
                </Styled.FormInnerWrapper>
                <Styled.FormInnerWrapper>
                    <Styled.AuthenticationLabel htmlFor="password">비밀번호</Styled.AuthenticationLabel>
                    <Styled.LoginInput 
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={password}
                        onChange={onChange}
                        autoComplete="off"
                    />
                </Styled.FormInnerWrapper>
                {
                    error && error.length > 0 && (
                        <Styled.FormInnerWrapper>
                            <Styled.ErrorMsgContainer>{error}</Styled.ErrorMsgContainer>
                        </Styled.FormInnerWrapper>
                    )
                }
                <Styled.FormInnerWrapper>
                    계정이 없으신가요?
                    <Styled.ToLoginORRegisterLink to="/signup">
                        회원가입하기
                    </Styled.ToLoginORRegisterLink>
                </Styled.FormInnerWrapper>
                <Styled.FormInnerWrapper>
                    <Styled.LoginSubmitButton 
                        type="submit"
                        value="로그인"
                        disabled={error?.length > 0}
                    >로그인</Styled.LoginSubmitButton>
                </Styled.FormInnerWrapper>
            </Styled.AuthenticationForm>
        </>
    )
}