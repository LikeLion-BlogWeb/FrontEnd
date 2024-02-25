interface SharedCommentProps {
    content: string;
    postId: number;
    email: string;
    name: string;
}

export interface GETCommentByIDProps extends SharedCommentProps{
    id: number;
    writeDate: string;
}

export interface POSTCommentProps extends SharedCommentProps{
    writeDate: string;
}

export interface FormatDateProps {
    dateOrTime: string;
    indexForMap: number;
}