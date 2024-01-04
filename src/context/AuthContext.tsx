import { useState, createContext } from "react"
import { UserAuthProps } from "../types/user.context"


interface authContextValue {
    authToken: string;
    setAuthToken: any;
}

// 초기값 설정
export const AuthContext = createContext<authContextValue>({
    authToken: "",
    setAuthToken: ""
});

// 상태관리
export function AuthContextProvider({children}: UserAuthProps) {
    const [authToken, setAuthToken] = useState<any>({});
    
    return (
        <>
            <AuthContext.Provider value={{authToken, setAuthToken}}>
                { children }
            </AuthContext.Provider>
        </>
    )
}