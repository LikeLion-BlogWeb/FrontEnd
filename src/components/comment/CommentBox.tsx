import { CommentBoxWrapper } from "components/style/comment/commentBox.style"
import { GETCommentByIDProps } from "types/comment.type"

export const CommentBox = ({data} : {data: GETCommentByIDProps}) => {

    return (
        <>
            <CommentBoxWrapper>
                <h4>{data.content}</h4>
            </CommentBoxWrapper>
        </>
    )
}