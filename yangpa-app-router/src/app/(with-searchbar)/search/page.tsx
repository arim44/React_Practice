import { promises } from "dns";

// 기본이 서버사이드임
export default async function Page({searchParams} : {searchParams:Promise<{q?:string}>}) {
    const {q} = await searchParams; 

    return (
        <div>
            <h1>검색어:{q}의 페이지 입니다.</h1>
        </div>
    );
}