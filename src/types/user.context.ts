import { ReactNode } from "react"

export type UserAuthProps = {
    children: ReactNode;
}

export type TokenUser = {
    email: string,
    password: string,
    token: string,
}