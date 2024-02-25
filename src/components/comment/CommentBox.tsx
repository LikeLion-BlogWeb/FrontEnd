import * as Styled from "components/style/comment/commentBox.style"
import { BACK_URL } from "constant/util";
import { AuthContext } from "context/AuthContext";
import { formatDate } from "functions/comment.function"
import { useContext } from "react";
import { toast } from "react-toastify";
import { FormatDateProps, GETCommentByIDProps } from "types/comment.type"

export const CommentBox = ({ data, setter } : {data: GETCommentByIDProps, setter: React.Dispatch<React.SetStateAction<GETCommentByIDProps[]>>}) => {
    const { token: { authToken }, user: { email } } = useContext(AuthContext);

    async function deleteComment(): Promise<void> {
        const checkConfirmBeforeDelete = window.confirm('정말 지우시겠습니까?');

        // 사용자가 삭제를 결정하고, 게시물이 존재하면 삭제 프로세스 시작
        if(checkConfirmBeforeDelete && data.id) {
            const response = await fetch(`${BACK_URL}/post/${data.id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": authToken
                }
            });

            if(response.status === 200) {
                toast.success("댓글 삭제를 완료했습니다.");
                setter(prevs => prevs.filter(prev => prev.id !== data.id));
            } else {
                toast.error("댓글 삭제를 실패했습니다.");
            }
        }
    }

    return (
        <>
            <Styled.CommentBoxWrapper>
                <Styled.CommentEtcWrapper>
                    <Styled.CommentEtcDiv className="user-name">{data.user.name}</Styled.CommentEtcDiv>
                    <div className="writeDate-wrapper">
                        {
                            formatDate(data.writeDate).map((object: FormatDateProps) => (
                                <Styled.CommentEtcDiv key={object.indexForMap} className="writeDate">{object.dateOrTime}</Styled.CommentEtcDiv>
                            ))
                        }
                    </div>
                </Styled.CommentEtcWrapper>
                <Styled.ModifyDivContainer>
                    <Styled.CommentContentSpan>{data.content}</Styled.CommentContentSpan>
                    {
                        email === data.user.email ? (
                            <Styled.ModifyDeleteDiv onClick={deleteComment}>삭제</Styled.ModifyDeleteDiv>
                        ) : null
                    }
                </Styled.ModifyDivContainer>
            </Styled.CommentBoxWrapper>
        </>
    )
}