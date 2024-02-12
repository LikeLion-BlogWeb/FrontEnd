export interface GETCommentByIDProps {
    id: number;
    content: string;
    writeDate: string;
    email: string;
    postId: number;
}

export interface POSTCommentProps {
    content: string;
    postId: string;
    writeDate: string;
    email: string;
}