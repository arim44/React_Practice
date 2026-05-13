import SaleItem from "@/components/sale-item";
import sales from '@/mock/sales.json';
import SaleDate from "@/typs";
import { ENV } from "@/env";

// q가 넘어와야함
export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
    // 객체로 받음
    const { q } = await searchParams;
    //url(안넘어올때, 넘어올때)
    let url = `${ENV.API_URL}/sales`;
    // q가 있으면
    if (q) {
        url += `?q=${q}`;
    }
    
    // url 제이슨 데이타 가져오기
    const response = await fetch(url);
    const data = await response.json();
    const sales: SaleDate[] = data.documents;

    return (
        <div>
            {sales.map((sale) => {
                return <SaleItem key={sale.id} {...sale} />
            })}
        </div>
    );
}