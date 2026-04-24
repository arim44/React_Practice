import { useState } from 'react'

import './App.css'
import type { Books } from './types/Books'
import BookCard from './component/Book'

//데이타
const books:Books[] =[
  {image:'https://image.aladin.co.kr/product/38646/7/cover500/8966265235_1.jpg', title:'한입 크기로 잘라먹는 리액트', author:'이정환'},
  {image:'https://image.aladin.co.kr/product/32790/94/cover500/k722936599_1.jpg', title:'처음 배우는 애저', author:'김도균'},
  {image:'https://image.aladin.co.kr/product/30678/38/cover500/k552830138_1.jpg', title:'Node.js 교과서', author:'조현영'},
]


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BookCard book={books[0]} />
      <BookCard book={books[1]} />
      <BookCard book={books[2]} />
    </div>
  )
}

export default App
