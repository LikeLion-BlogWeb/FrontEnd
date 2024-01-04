import { useState } from "react"
import { ErrorMsgContainer, FormInnerWrapper, LoginAndRegisterTitle, LoginInput, LoginSubmitButton, StyledForm, StyledLabel, StyledLink } from "../style/signin_up.style"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BACK_URL } from "../../url";

export default function SignupForm() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    // 사용자가 Input에 입력할때마다 적용되는 함수
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                setError("비밀번호는 8자리 이상으로 입력해주세요");
            } else if (passwordConfirm?.length > 0 && value !== passwordConfirm) {
                setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.");
            } else {
                setError("");
            }
        }

        if (name === "password_confirm") {
            setPasswordConfirm(value);

            if (value?.length < 8) {
                setError("비밀번호는 8자리 이상으로 입력해주세요");
            } else if (value !== password) {
                setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.");
            } else {
                setError("");
            }
        }
    };

    // 제출버튼 눌렀을때 동작하는 함수
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(typeof password, email);
        
        // 이메일과 패스워드 변수에 데이터 잘 들어가는 건 확인
        try {
            const response = await fetch(`//${BACK_URL}/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            });
            const data = await response.json();

            console.log(data);
            
            if(data?.token) {
                toast.success("회원가입에 성공했습니다.");
                // 토큰을 로컬 스토리지에 저장
                localStorage.setItem('token', data?.token);
                // 응답으로 넘어온 토큰이 존재하면 로그인 화면으로
                navigate("/signin")
            } else {
                toast.error(data.email);
            }
        } catch(err: any) {
            console.log(err);
            toast.error(err?.code);
        }
    }

    return (
        <>
            <StyledForm onSubmit={onSubmit}>
                <LoginAndRegisterTitle>회원가입</LoginAndRegisterTitle>
                <FormInnerWrapper>
                    <StyledLabel htmlFor="email">이메일</StyledLabel>
                    <LoginInput 
                        type="email"
                        id="email"
                        name="email"
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
                        value={password}
                        onChange={onChange}
                        autoComplete="off"
                    />
                </FormInnerWrapper>

                <FormInnerWrapper>
                    <StyledLabel htmlFor="password_confirm">비밀번호 확인</StyledLabel>
                    <LoginInput 
                        type="password"
                        id="password_confirm"
                        name="password_confirm"
                        required
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
                    계정이 이미 있으신가요?
                    <StyledLink to="/signin">
                        로그인하기
                    </StyledLink>
                </FormInnerWrapper>
                <FormInnerWrapper>
                    <LoginSubmitButton
                        type="submit"
                        value="회원가입"
                        disabled={error?.length > 0}
                    >로그인</LoginSubmitButton>
                </FormInnerWrapper>
            </StyledForm>
        </>
    )
}