// 노션에 적혀있는 넘어오는 데이터형태 타입 정의
export interface PostDataType {
    id: number;
    title: string;
    content: string;
    email: string;
    writeDate: string;
    like: number[];
    views: number;
    category: string;
}

export interface PostListProps {
    hasNavigation: boolean;
    defaultTab: TabType;
}

export type TabType = "all" | "my";