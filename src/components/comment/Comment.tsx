import { useContext, useEffect, useState } from "react";
import * as Styled from "../style/comment/comment.style"
import { AuthContext } from "context/AuthContext";
import { formatDate } from "functions/post.function";
import { toast } from "react-toastify";
import { CommentBox } from "./CommentBox";
import { GETCommentByIDProps, POSTCommentProps } from "types/comment.type";
import useFetch from "hooks/useFetch";
import Loader from "components/common/Loader";


export default function Comment({ id } : { id: string }) {
    const [textareaConetent, setTextareaContent] = useState<string>("");
    const [comments, setComments] = useState<GETCommentByIDProps[]>([]);
    // 객체구조분해를 통해 변수로 꺼내와서 사용
    const { token: { authToken }, user: { email, name } } = useContext(AuthContext);
    const { loading, post, get } = useFetch();

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setTextareaContent(e.target.value);
    }

    async function handleSubmit() {
        const SENDING_DATA: POSTCommentProps | GETCommentByIDProps = {
            content: textareaConetent,
            postId: Number(id),
            writeDate: formatDate(new Date()),
            user: {
                email,
                name,
            }
        }  

        const data = await post("comment", SENDING_DATA);
        if(data) {
            toast.success("댓글을 생성하였습니다.");
            // 재렌더링 trigger
            setComments(prevComments => [
                ...prevComments, 
                {
                    ...SENDING_DATA, 
                    id: Number(id), 
                    postId: Number(id)
                }
            ]);
        } else {
            toast.error("댓글 업로드에 실패했습니다.");
        }
        // 서버에 전송됐다고 생각하고 작성 내용 날리기
        setTextareaContent("");
    }

    useEffect(() => {
        const getComments = async() => {
            const data = await get(`comment/post/${id}`);
            if(data) {
                setComments(data);
            }
        }

        getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(!id) {
        return <h1>ID값을 전달받지 못했습니다.</h1>
    } else if(loading) {
        return <Loader />
    }
 
    return (
        <>
            <Styled.CommentContainer>
                <h3>{comments.length}개의 댓글</h3>
                <Styled.CommentTextarea id="comment" name="comment" onChange={handleChange} value={textareaConetent} placeholder="댓글을 작성해보세요!"></Styled.CommentTextarea>
                <div style={{
                    display: "flex",
                    justifyContent: "flex-end"
                }}>
                    <Styled.CommentSubmitButton onClick={handleSubmit} disabled={!authToken}>댓글 작성</Styled.CommentSubmitButton>          
                </div> 
                {
                    comments.map((commentData: GETCommentByIDProps) => {

                        return (
                            <CommentBox data={commentData} setter={setComments} key={commentData.id}/>
                        )
                    })
                }    
            </Styled.CommentContainer>
        </>
    )
}