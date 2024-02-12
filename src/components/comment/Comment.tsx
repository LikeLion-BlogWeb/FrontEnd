import { useContext, useEffect, useState } from "react";
import { CommentContainer, CommentSubmitButton, CommentTextarea } from "../style/comment/comment.style"
import { BACK_URL } from "../../util";
import { AuthContext } from "context/AuthContext";
import { formatDate } from "functions/post.function";
import { toast } from "react-toastify";
import { CommentBox } from "./CommentBox";
import { GETCommentByIDProps, POSTCommentProps } from "types/comment.type";

export default function Comment({ id } : { id: string }) {
    const [textareaConetent, setTextareaContent] = useState<string>("");
    const [comments, setComments] = useState<GETCommentByIDProps[]>([]);
    // 객체구조분해를 통해 변수로 꺼내와서 사용
    const { authToken, userEmail } = useContext(AuthContext);

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setTextareaContent(e.target.value);
    }

    async function handleSubmit() {
        const dataObjectToSend: POSTCommentProps | GETCommentByIDProps = {
            content: textareaConetent,
            postId: id,
            writeDate: formatDate(new Date()),
            email: userEmail
        }   

        if(!authToken) {
            toast.error("로그인을 우선 해주세요!");
        }

        try {
            const response = await fetch(`${BACK_URL}/comment`, {
                method: "POST",
                headers: {
                    "Authorization": authToken,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataObjectToSend)
            });

            if(response.ok) {
                toast.success("댓글을 생성하였습니다.");
                // 재렌더링 trigger
                setComments(prevComments => [...prevComments, 
                    {...dataObjectToSend, 
                        id: Number(id), 
                        postId: Number(id)
                    }]);
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

    useEffect(() => {
        const getCommentsById = async(id: string) => {
            try {
                const response = await fetch(`${BACK_URL}/comment/post/${id}`, {
                    method: "GET",
                    headers: {
                        "Authorization": authToken,
                    },
                });

                if(response.ok) {
                    const data = await response.json();
                    setComments(data);
                } else {
                    // HTTP 통신은 성공했지만, 응답값이 오류인 경우(4XX)
                    toast.error("댓글을 가져오는데에 실패했습니다.");
                }
            } catch(error: any) {
                // HTTP 요청 자체를 실패한 경우
                toast.error("네트워크 상태를 확인해주세요");
                throw Error("Error while fetching comment");
            }
        }

        getCommentsById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                {
                    comments.map((commentData: GETCommentByIDProps) => {

                        return (
                            <>
                                <CommentBox key={commentData.id} data={commentData}/>
                            </>
                        )
                    })
                }    
            </CommentContainer>
        </>
    )
}