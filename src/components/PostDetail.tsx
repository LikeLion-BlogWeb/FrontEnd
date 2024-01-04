import { AuthContext } from "context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { PostProps } from "types/postlist.type";
import { BACK_URL } from "../url";
import { PostDetailContainer } from "./style/postdetail.style";

export default function PostDetail() {
    const [post, setPost] = useState<PostProps | null>(null);
    const { authToken } = useContext(AuthContext);
    const params = useParams();
    
    // id기반으로 서버로부터 데이터 얻어냅니다
    async function getPost(id: string) {
        if(id) {
            const response = await fetch(`${BACK_URL}/post/${id}`);
            const postData = await response.json();

            setPost(postData);
        }
    }

    async function deletePost() {
        const checkConfirmBeforeDelete = window.confirm('정말 지우시겠습니까?');

        if(checkConfirmBeforeDelete && post && post.id) {

        }
    }
    
    // 경로에서 id 파라미터 값이 변경될때마다 새로 함수 불러오기
    useEffect(() => {
        if(params?.id) {
            getPost(params?.id);
        }
    }, [params?.id]);

    return (
        <>
            <h1>This is post-detail page</h1>
            <PostDetailContainer>

            </PostDetailContainer>
        </>
    )
}