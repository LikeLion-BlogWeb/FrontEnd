import { ReactNode } from "react"

export interface AuthContextValue {
    token: {
        authToken: string,
        setAuthToken: React.Dispatch<any>
    },
    user: {
        email: string;
        setEmail: React.Dispatch<any>,
        name: string;
        setName: React.Dispatch<any>
    }
}

// context provider 내에 children태그 형태로 넘겨주는 타입을 설정한겁니다
export type UserAuthProps = {
    children: ReactNode;
}