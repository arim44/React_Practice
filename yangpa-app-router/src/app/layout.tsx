import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <header>
      {/* 링크로 하면 미리가져오는 프리패칭을 함 */}
      <Link href={'/'}>홈</Link> &nbsp;&nbsp;
      <Link href={'/search'}>검색</Link> &nbsp;&nbsp;
      <Link href={'/sale/1'}>1번 상품</Link> &nbsp;&nbsp;
      </header>
      <body>{children}</body>
    </html>
  );
}
