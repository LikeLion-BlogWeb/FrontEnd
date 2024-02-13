import { FormatDateProps } from "types/comment.type";

export async function getComment(id: string) {
    return "";
}

export function formatDate(date: string): FormatDateProps[] {
    // 들어온 날짜 데이터 : (ex : 2020-11-11T15:16:17 형태)
    // T문자열을 기준으로 잘라내면, 날짜와 시간이 분리되어 배열에 담겨짐
    let temp = date.split("T");
    const result = temp.map((value, index) => {
        const formatedObject = {
            dateOrTime: value,
            indexForMap: index
        }

        return formatedObject;
    })

    return result;
}