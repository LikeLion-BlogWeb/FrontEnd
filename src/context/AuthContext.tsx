import { useState, createContext } from "react"
import { AuthContextValue, UserAuthProps } from "../types/user.context"

// 초기값 설정
export const AuthContext = createContext<AuthContextValue>({
    token: {
        authToken: "",
        setAuthToken: () => {},
    },
    user: {
        email: "",
        setEmail: () => {},
        name: "",
        setName: ()=>{},
    }
});

// 상태관리
export function AuthContextProvider({children}: UserAuthProps) {
    const [token, setToken] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");

    return (
        <>
            <AuthContext.Provider value={{ 
                token: {
                    authToken: token,
                    setAuthToken: setToken,
                },
                user: {
                    email: email,
                    setEmail: setEmail,
                    name: name,
                    setName: setName,
                }
            }}>
                { children }
            </AuthContext.Provider>
        </>
    )
}