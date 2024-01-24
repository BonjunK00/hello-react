import { Link, Outlet } from 'react-router-dom'

export const UpperBar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center px-[50px] bg-[#F7FBFC] h-[70px]">
        <Link className="flex-2 text-[30px]" to="/">
          HOME
        </Link>
        <div className="flex-1 flex justify-center space-x-[20px] text-[20px]">
          <Link className="hover:text-blue-500 p-[3px]" to="/nhannha">
            냔냐
          </Link>
          <Link className="hover:text-blue-500 p-[3px]" to="/nyongnyong">
            뇽뇽
          </Link>
        </div>
        <Link className="flex-2  hover:text-blue-500 p-[3px]" to="/login">
          로그인
        </Link>
      </div>
      <Outlet />
    </div>
  )
}
