import { PostDataType } from "types/postlist.type";
import { BACK_URL } from "../util";

export function formatDate(date: Date) : string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

export async function getPost(id: string, token: string): Promise<PostDataType> {
    try {
        const response = await fetch(`${BACK_URL}/post/${id}`, {
            method: "GET",
            headers: {
                "Authorization": token
            }
        });

        if(!response.ok) {
            throw new Error(`Failed to fetch post data. Status: ${response.status}`);
        }

        // 백으로부터 데이터를 잘 들고 왔을 때, json화 시킨 게시물 데이터
        const data = await response.json();
        return data;
    } catch(error: any) {
        throw new Error(`Error in getPost: ${error.message}`);
    }
}

export async function getPostList(token: string): Promise<PostDataType[]> {
    try {
        // 응답값 : 포스트들 : 배열
        const response = await fetch(`${BACK_URL}/post`, {
            method: "GET",
            headers: {
                "Authorization": token
            },
        });

        if(!response.ok) {
            throw new Error(`Failed to fetch post data. Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch(error: any) {
        throw new Error(`Error in getPostList: ${error.message}`);
    }
}