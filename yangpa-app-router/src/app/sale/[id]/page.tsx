import { fetchSales, fetchSalesById } from "@/utils/fetch-sales";
import { GetStaticPropsContext } from "next";
import salesMock from '@/mock/sales.json';


export async function getStaticPaths() {
  const sales = await fetchSales();

  return {
    paths:
      // 일일이 만들수 없으니 데이타를 가지고 와서 맵으로 돌면서 만듬
      sales.map((sale)=>{
        return {params: {id : String(sale.id)}};
      })
      // { params: { id: '1' } },  //문자열을 넣어야 함 (넘버아님)
      // { params: { id: '2' } },
      // { params: { id: '3' } },
    ,
    fallback:'blocking',  //false, 'blocking' 위3개는 그냥 만들어지고 4,5번은 없지만 만들어둠
  }
}

export async function getStaticProps(context: GetStaticPropsContext){
    const id = context.params!.id;
    const sale = await fetchSalesById(Number(id));
    return {props: {sale}, revalidate:10};
}


export default async function Page({params} : {params:Promise<{id:string}>}) {
    const {id} = await params;

    return (
        <div>
            <h1>{id}번 상품 상세 페이지</h1>
        </div>
    );
}
