
import SaleItem from "@/components/sale-item";
import type SaleDate from "@/typs";
import { ENV } from "@/env";
import style from './page.module.css'

export default async function Home() {
  // url 가져오기
  const response = await fetch(`${ENV.API_URL}/sales/recent`, {next: {revalidate:10}}); //{cache:'force-cache'}, {cache:'no-store'} 
  // 제이슨 파일 가져오기
  const data = await response.json();
  // 데이타 SaleDate의 배열로
  const sales: SaleDate[] = data.documents;

  return (
    <div className={style.container}>
      <h3>최근 등록된 상품</h3>

      {/* 세일아이템 띄우기*/}
      {/* 하나만 골라서 나오게 테스트 */}
      {/* <SaleItem {...sales[3]}/> */}

      {/* 다나오게 .map() 각각 풀게 세일 아이템 하나 들어가고*/}
      {sales.map((sale) => {
        return <SaleItem key={sale.id} {...sale}/>
      })}
      
    </div>
  );
}
