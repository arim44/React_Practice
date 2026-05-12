import type SaleDate from "@/typs";
import Image from "next/image";
import style from './page.module.css'
import sales from '@/mock/sales.json'

export default function Page() {
    const { productName, description, price, photo, } = sales[3];

    const imageUrl = `https://styangpa.blob.core.windows.net/yangpa/${photo}`

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