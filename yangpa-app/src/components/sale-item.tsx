import SaleDate from "@/typs";  // 디폴트가 그냥 받는데 디폴트 아니면 type{ } 객체로 받아야 함
import Image from "next/image";
import style from './sale-item.module.css'

export default function SaleItem({
    id,
    productName,
    description,
    price,
    photo, }: SaleDate) {
    // 이미지 경로/{이미지이름}
    const imageUrl = `https://styangpa.blob.core.windows.net/yangpa/${photo}`
    return (
        <div className={style.container}>
            {/* 이미지 */}
            <Image className={style.image} src={imageUrl} alt="" width={100} height={100}/>

            <div>
                <div className={style.title}>상품명 : {productName}</div>
                <div className={style.description}>설명 : {description}</div>
                <div className={style.price}>가격 : {price}원</div>
            </div>
        </div>
    );
}

// 데이타 받기 세일 데이타 타입필요 typs.ts에 만듬