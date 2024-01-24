import { useState } from 'react'

export const Login = () => {
  const [id, setId] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onClickLogin = () => {}

  return (
    <div className="flex flex-col items-center space-y-[10px] p-[10px]">
      <input onChange={onChangeId}></input>
      <input onChange={onChangePassword}></input>
      <button className="bg-[#B9D7EA] p-[5px] w-[150px]" onClick={onClickLogin}>
        로그인
      </button>
    </div>
  )
}
