
import './App.css'
import { Header, Main, Product, NotFound } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: 'Product/*', element: <Product /> },
    ],
  },
  // {
  //   path: '/user',
  //   element: <Layout />,
  //   children: [
  //     { index: true, element: <Main /> },
  //     { path: 'Product/*', element: <Product /> },
  //   ],
  // },
  { path: '*', element: <NotFound /> },
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
    // // {/* 최상위에 브라우저라우터 있어야 함 */}
    // <BrowserRouter>
    //   <Header />
    //   {/* 경로 바뀔 애들이 라우터스 안으로 */}
    //   {/* 루트는 메인을 보여주고 루트/product 경로로 들어가면 상품페이지로 헤더는 변화없음 */}
    //   <Routes>
    //     <Route path='/' element={<Main />} />
    //     <Route path='/product/*' element={<Product />} />
    //     <Route path='*' element={<NotFound />} />
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App


// createBrowserRouter를 사용
// const router = createBrowserRouter([
// { path: '/', element: (<> <Header /><Main /> </>),},
// { path: '/product/*', element: (<> <Header /><Product /> </>),},
// { path: '*'
// , element: (<> <Header /><NotFound /> </>),},
// ]);

// function App() {

//   return (
//     <div className="App">
//       <RouterProvider router={router} />
//     </div>
//     // // {/* 최상위에 브라우저라우터 있어야 함 */}
//     // <BrowserRouter>
//     //   <Header />
//     //   {/* 경로 바뀔 애들이 라우터스 안으로 */}
//     //   {/* 루트는 메인을 보여주고 루트/product 경로로 들어가면 상품페이지로 헤더는 변화없음 */}
//     //   <Routes>
//     //     <Route path='/' element={<Main />} />
//     //     <Route path='/product/*' element={<Product />} />
//     //     <Route path='*' element={<NotFound />} />
//     //   </Routes>
//     // </BrowserRouter>
//   )
// }