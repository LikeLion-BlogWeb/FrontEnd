import { AuthContext } from "context/AuthContext";
import { useContext, useState } from "react";
import { BACK_URL } from "constant/util";

export default function useFetch() {
    const [loading, setLoading] = useState<boolean>(false);
    const [fetchError, setFetchError] = useState<string>("");
    // 전역상태(context)로부터 토큰 정보를 가지고 옵니다 | 객체구조분해할당
    const { token: { authToken } } = useContext(AuthContext);

    async function fetchData(url: string, options: object = {}) {
        try {
            setLoading(true);
            const response = await fetch(`${BACK_URL}/${url}`, options);
            const data = await response.json();

            setLoading(false);
            // get, post, put, del 메서드를 통해서 외부로 보내지는 결과물(데이터)
            return data;
        } catch(error: any) {
            setLoading(false);  
            setFetchError(error);
        }
    }

    async function get(url: string, options: object = { 
        method: "GET", 
        headers: { 
            "Authorization": authToken, 
        } 
    }) {
        return await fetchData(url, {
            headers: {
                "Content-Type": "application/json",
            },
            ...options,
        });
    }

    async function post(url: string, body: object, options: object = { 
        method: "POST", 
        headers: { 
            "Authorization": authToken,
            "Content-Type": "application/json", 
        } 
    }) {
        return await fetchData(url, { 
            ...options,
            body: JSON.stringify(body),
        });
    }

    async function put(url: string, body: object, options: object = { 
        method: "PUT", 
        headers: { 
            "Authorization": authToken, 
            "Content-Type": "application/json",
        } 
    }) {
        return await fetchData(url, { 
            ...options,
            body: JSON.stringify(body), 
        });
    }

    async function del(url: string, options: object = { 
        method: "DELETE", 
        headers: { 
            "Authorization": authToken, 
        } 
    }) {
        return await fetchData(url, { 
            ...options
        });
    }

    return {
        loading,
        fetchError,
        get,
        post,
        put,
        del,
    }
}