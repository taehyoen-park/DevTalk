
export interface postInterface {
    postid: number;
    username: string;
    title: string;
    content: string;
    tags: Object[];
    time: string; // ISO 8601 형식의 날짜 문자열
} 