import { useState } from "react"
import * as Styled from "../style/authentication/signin_up.style"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { SubmitDataType } from "types/authentication/signup.type";
import useFetch from "hooks/useFetch";
import Loader from "components/common/Loader";

export default function SignupForm() {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [error, setError] = useState<string>("");
    const { loading, fetchError, post } = useFetch();

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

        if(name === "name") {
            setName(value);
            
            if(value?.length < 2) {
                setError("이름을 올바르게 작성해주세요");
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

        const SENDING_DATA: SubmitDataType = {
            email: email,
            password: password,
            name: name,
        };

        const data = await post("auth/signup", SENDING_DATA);

        if(data) {
            toast.success("회원가입에 성공했습니다.");
            navigate("/signin")
        } else {
            toast.error(data.email);
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
                <Styled.LoginAndRegisterTitle>회원가입</Styled.LoginAndRegisterTitle>
                <Styled.FormInnerWrapper>
                    <Styled.AuthenticationLabel htmlFor="email">이메일</Styled.AuthenticationLabel>
                    <Styled.LoginInput 
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        autoComplete="off"
                    />
                </Styled.FormInnerWrapper>

                <Styled.FormInnerWrapper>
                    <Styled.AuthenticationLabel htmlFor="password_confirm">이름</Styled.AuthenticationLabel>
                    <Styled.LoginInput 
                        type="text"
                        id="name"
                        name="name"
                        required
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
                        value={password}
                        onChange={onChange}
                        autoComplete="off"
                    />
                </Styled.FormInnerWrapper>

                <Styled.FormInnerWrapper>
                    <Styled.AuthenticationLabel htmlFor="password_confirm">비밀번호 확인</Styled.AuthenticationLabel>
                    <Styled.LoginInput 
                        type="password"
                        id="password_confirm"
                        name="password_confirm"
                        required
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
                    계정이 이미 있으신가요?
                    <Styled.ToLoginORRegisterLink to="/signin">
                        로그인하기
                    </Styled.ToLoginORRegisterLink>
                </Styled.FormInnerWrapper>
                <Styled.FormInnerWrapper>
                    <Styled.LoginSubmitButton
                        type="submit"
                        value="회원가입"
                        disabled={error?.length > 0}
                    >회원가입</Styled.LoginSubmitButton>
                </Styled.FormInnerWrapper>
            </Styled.AuthenticationForm>
        </>
    )
}