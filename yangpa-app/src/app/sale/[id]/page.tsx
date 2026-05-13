import type SaleDate from "@/typs";
import Image from "next/image";
import style from './page.module.css'
import { ENV } from "@/env";
// import sales from '@/mock/sales.json'

// 아이디 params, searchParams
export default async function Page({ params }: {
    params: Promise<{ id: string }>;
}) {
    // const { productName, description, price, photo, } = sales[3]; //목데이타 넣음
    let sales: SaleDate[];

    try {
        const { id } = await params;       //id
        const response = await fetch(`${ENV.API_URL}/sales/${id}`);
        // response.ok가 아니면 캐치에서 처리
        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();
        sales = data.documents;
        // params 에는 무조건 하나들어있음

    } catch (err) {
        console.log('예외발생' , err)
        //console.error(err);
        return <div>오류가 발생했습니다. 다시 시도!!</div>
    }

    // 예외 발생할 일이 없어서 try 문 밖으로 뺌
    const { productName, description, price, photo, } = sales[0];
    const imageUrl = `${ENV.IMAGE_URL}/${photo}`

    return (
        <div className={style.container}>
            <div className={style.cover_img_container}
                style={{ backgroundImage: `url('${imageUrl}')` }}>
                {/* 이미지 */}
                <Image className={style.cover_img} src={imageUrl} alt="" width={300} height={300} />
            </div>
            <div className={style.title}>{productName}</div>
            <div className={style.price}>{price.toLocaleString()}원</div>
            <div className={style.description}>{description}</div>

        </div>
    );
}