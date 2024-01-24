import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="text-[50px]">Home</div>
      <div className="flex w-full justify-center space-x-[10px]">
        <Link className="hover:bg-gray-200 p-[3px] border-[1px] border-black" to="/nhannha">
          NhanNha
        </Link>
        <Link className="hover:bg-gray-200 p-[3px] border-[1px] border-black" to="/nyongnyong">
          NyongNyong
        </Link>
      </div>
    </div>
  )
}
