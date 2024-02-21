type Method = "GET" | "PUT" | "POST" | "DELETE";
export interface InterfaceProps {
    url: string;
    method: Method;
    bodyData?: object;
}