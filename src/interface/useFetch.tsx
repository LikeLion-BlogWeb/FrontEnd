import { AuthContext } from "context/AuthContext";
import { useContext, useState } from "react";
import { InterfaceProps } from "./interface.type";
import { BACK_URL } from "constant/util";

export default function useFetch({ url, method, bodyData } : InterfaceProps) {
    // pending, fulfilled, rejected | 3가지 상태를 갖습니다
    const [status, setStatus] = useState<string>("pending");
    // 서버로부터 받아온 데이터를 반환하는 변수
    const [fetchResultData, setFetchResultData] = useState<any>(null);
    // 전역상태(context)로부터 토큰 정보를 가지고 옵니다 | 객체구조분해할당
    const { authToken } = useContext(AuthContext);

    const GET: (url: string) => Promise<void> = async (url: string) => {
        try {
            const response = await fetch(`${BACK_URL}/${url}`, {
                method: method,
                headers: {
                    "Authorization": authToken
                }
            });

            // 응답에 성공하지 못한 경우 catch문으로 보내주기
            if(!response.ok) {
                setStatus("rejected");
                throw Error("응답은 받아왔지만, 오류 발생. 400번대 에러")
            }

            const PARCED_JSON_DATA = await response.json();
            // 데이터가 성공적으로 파싱되면 데이터와 상태를 업데이트
            setFetchResultData(PARCED_JSON_DATA);
            setStatus("fulfilled");

        } catch(error: unknown) {
            setStatus("rejected");
            // 주로 네트워크 문제 or 서버 오류
            throw error;
        }
    }
    
    const PUT = async (url: string) => {
        try {
            const response = await fetch(`${BACK_URL}/${url}`, {
                method: method,
                headers: {
                    "Authorization": authToken
                },
                body: JSON.stringify(bodyData)
            });

            // 응답에 성공하지 못한 경우 catch문으로 보내주기
            if(!response.ok) {
                throw Error("응답은 받아왔지만, 오류 발생. 400번대 에러")
            }

            const PARCED_JSON_DATA = await response.json();
            // 데이터가 성공적으로 파싱되면 데이터와 상태를 업데이트
            setFetchResultData(PARCED_JSON_DATA);
            setStatus("fulfilled");

        } catch(error: unknown) {
            setStatus("rejected");
            // 주로 네트워크 문제 or 서버 오류
            throw error;
        }
    }
    
    const POST = async (url: string) => {
        try {
            const response = await fetch(`${BACK_URL}/${url}`, {
                method: method,
                headers: {
                    "Authorization": authToken
                },
                body: JSON.stringify(bodyData)
            });

            // 응답에 성공하지 못한 경우 catch문으로 보내주기
            if(!response.ok) {
                throw Error("응답은 받아왔지만, 오류 발생. 400번대 에러")
            }

            const PARCED_JSON_DATA = await response.json();
            // 데이터가 성공적으로 파싱되면 데이터와 상태를 업데이트
            setFetchResultData(PARCED_JSON_DATA);
            setStatus("fulfilled");

        } catch(error: unknown) {
            setStatus("rejected");
            // 주로 네트워크 문제 or 서버 오류
            throw error;
        }
    }
    
    const DELETE = async (url: string) => {
        const checkConfirmBeforeDelete = window.confirm("정말 지우시겠습니까?");

        if(checkConfirmBeforeDelete) {
            try {
                const response = await fetch(`${BACK_URL}/${url}`, {
                    method: method,
                    headers: {
                        "Authorization": authToken
                    },
                });
    
                // 응답에 성공하지 못한 경우 catch문으로 보내주기
                if(!response.ok) {
                    throw Error("응답은 받아왔지만, 오류 발생. 400번대 에러")
                }
                // 데이터를 성공적으로 삭제하면 상태 업데이트
                setStatus("fulfilled");

            } catch(error: unknown) {
                // 삭제를 실패한 경우, 상태 업데이트
                setStatus("rejected");
                throw error;
            }
        }
    }

    
    switch(method) {
        case "GET":
            GET(url);
            break;
        case "PUT":
            PUT(url);
            break;
        case "POST":
            POST(url);
            break;
        case "DELETE":
            DELETE(url);
            break;
    }

    return {
        status,
        fetchResultData
    }
}