import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NyongNyong } from './pages/nyongNyong/NyongNyong'
import { NhanNha } from './pages/nhanNha/NhanNha'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nyongnyong" element={<NyongNyong />} />
        <Route path="/nhannha" element={<NhanNha />} />
      </Routes>
    </BrowserRouter>
  )
}
