import { useState, createContext } from "react"
import { UserAuthProps } from "../types/user.context"


interface authContextValue {
    authToken: string;
    setAuthToken: any;
    userEmail: string;
    setUserEmail: any;
}

// 초기값 설정
export const AuthContext = createContext<authContextValue>({
    authToken: "",
    setAuthToken: "",
    userEmail: "",
    setUserEmail: "",
});

// 상태관리
export function AuthContextProvider({children}: UserAuthProps) {
    const [authToken, setAuthToken] = useState<any>("");
    const [userEmail, setUserEmail] = useState("");

    return (
        <>
            <AuthContext.Provider value={{authToken, setAuthToken, userEmail, setUserEmail}}>
                { children }
            </AuthContext.Provider>
        </>
    )
}