import { useContext, useState } from "react";
import { CommentContainer, CommentSubmitButton, CommentTextarea } from "../style/comment/comment.style"
import { BACK_URL } from "../../util";
import { AuthContext } from "context/AuthContext";
import { formatDate } from "functions/post.function";
import { toast } from "react-toastify";

export const Comment = ({id} : {id: string}) => {
    const [textareaConetent, setTextareaContent] = useState<string>("");
    const [comments, setComments] = useState<string[]>([]);
    // 객체구조분해를 통해 변수로 꺼내와서 사용
    const { authToken, userEmail } = useContext(AuthContext);

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setTextareaContent(e.target.value);
    }

    async function handleSubmit() {
        try {
            const response = await fetch(`${BACK_URL}/comment`, {
                method: "POST",
                headers: {
                    "Authorization": authToken,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    content: textareaConetent,
                    postId: id,
                    writeDate: formatDate(new Date()),
                    email: userEmail
                })
            });

            if(response.ok) {
                toast.success("댓글을 생성하였습니다.");
            } else {
                // HTTP 통신은 성공했지만, 응답값이 오류인 경우(4XX)
                toast.error("댓글 업로드에 실패했습니다.");
            }
        } catch(error: any) {
            // HTTP 요청 자체를 실패한 경우
            toast.error("네트워크 상태를 확인해주세요");
            throw Error("Error while fetching comment");
        }
        // 전송됐다고 생각하고 작성 내용 날리기
        setTextareaContent("");
    }

    if(!id) {
        return <h1>ID값을 전달받지 못했습니다.</h1>
    }

    return (
        <>
            <CommentContainer>
                <h3>99개의 댓글</h3>
                <CommentTextarea id="comment" name="comment" onChange={handleChange} value={textareaConetent} placeholder="댓글을 작성해보세요!"></CommentTextarea>
                <div style={{
                    display: "flex",
                    justifyContent: "flex-end"
                }}>
                    <CommentSubmitButton onClick={handleSubmit}>댓글 작성</CommentSubmitButton>          
                </div>     
            </CommentContainer>
        </>
    )
}