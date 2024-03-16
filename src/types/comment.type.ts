interface SharedCommentProps {
    content: string;
    postId: number;
}

export interface GETCommentByIDProps extends SharedCommentProps{
    id: number;
    writeDate: string;
    user: {
        email: string;
        name: string;
    }
}

export interface POSTCommentProps extends SharedCommentProps{
    writeDate: string;
    email?: string;
}

export interface FormatDateProps {
    dateOrTime: string;
    indexForMap: number;
}