import SaleItem from "@/components/sale-item";
import sales from '@/mock/sales.json';

export default function Page() {
    return (
        <div>
            {/* 다나오게 .map() 각각 풀게 세일 아이템 하나 들어가고*/}
            {sales.map((sale) => {
                return <SaleItem key={sale.id} {...sale} />
            })}
        </div>
    );
}