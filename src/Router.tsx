import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UpperBar } from './pages/UpperBar'
import { NyongNyong } from './pages/nyongNyong/NyongNyong'
import { NhanNha } from './pages/nhanNha/NhanNha'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'

export const Router = () => {
  return (
    <BrowserRouter basename="https://bonjunk00.github.io/hello-react">
      <Routes>
        <Route path="/" element={<UpperBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/nyongnyong" element={<NyongNyong />} />
          <Route path="/nhannha" element={<NhanNha />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
