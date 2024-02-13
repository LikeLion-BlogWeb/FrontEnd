import { CommentBoxWrapper, CommentContentSpan, CommentEtcDiv, CommentEtcWrapper } from "components/style/comment/commentBox.style"
import { formatDate } from "functions/comment.function"
import { FormatDateProps, GETCommentByIDProps } from "types/comment.type"

export const CommentBox = ({ data } : {data: GETCommentByIDProps}) => {

    return (
        <>
            <CommentBoxWrapper key={data.id}>
                <CommentEtcWrapper>
                    <CommentEtcDiv className="user-email">{data.email}</CommentEtcDiv>
                    <div className="writeDate-wrapper">
                        {
                            formatDate(data.writeDate).map((object: FormatDateProps) => (
                                <CommentEtcDiv key={object.indexForMap} className="writeDate">{object.dateOrTime}</CommentEtcDiv>
                            ))
                        }
                    </div>
                </CommentEtcWrapper>
                <CommentContentSpan>{data.content}</CommentContentSpan>
            </CommentBoxWrapper>
        </>
    )
}