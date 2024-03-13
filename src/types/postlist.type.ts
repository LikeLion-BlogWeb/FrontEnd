type UserData = {
    email: string;
    name: string;
    password: string;
}

// 노션에 적혀있는 넘어오는 데이터형태 타입 정의
export interface PostDataType {
    category: string;
    comments: string[];
    content: string;
    id: number;
    like: number[];
    title: string;
    user: UserData;
    views: number;
    writeDate: string;
}

export interface PostListProps {
    hasNavigation: boolean;
    defaultTab: TabType;
}

export type TabType = "all" | "my";