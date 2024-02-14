import * as Styled from "components/style/comment/commentBox.style"
import { formatDate } from "functions/comment.function"
import { FormatDateProps, GETCommentByIDProps } from "types/comment.type"

export const CommentBox = ({ data } : {data: GETCommentByIDProps}) => {

    return (
        <>
            <Styled.CommentBoxWrapper key={data.id}>
                <Styled.CommentEtcWrapper>
                    <div className="left-div-wrapper">
                        <Styled.CommentEtcDiv className="user-email">{data.email}</Styled.CommentEtcDiv>
                        <div className="writeDate-wrapper">
                            {
                                formatDate(data.writeDate).map((object: FormatDateProps) => (
                                    <Styled.CommentEtcDiv key={object.indexForMap} className="writeDate">{object.dateOrTime}</Styled.CommentEtcDiv>
                                ))
                            }
                        </div>
                    </div>
                    <div className="right-div-wrapper">
                        
                    </div>
                </Styled.CommentEtcWrapper>
                <Styled.CommentContentSpan>{data.content}</Styled.CommentContentSpan>
            </Styled.CommentBoxWrapper>
        </>
    )
}