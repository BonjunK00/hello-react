import { useEffect, useState } from 'react'
import { useIsLogInStore } from '../../store/store'
import { useNavigate } from 'react-router-dom'

const defaultId = 'nhannha'
const defaultPassword = 'test'

export const Login = () => {
  const [id, setId] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const { isLogIn, setIsLogIn } = useIsLogInStore()

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onClickLogin = () => {
    if (id !== defaultId || password !== defaultPassword) {
      alert('아이디 혹은 비밀번호가 틀렸습니다.')
      return
    }
    setIsLogIn(true)
    navigate('/')
  }

  useEffect(() => {
    if (isLogIn) {
      navigate('/')
    }
  }, [isLogIn])

  return (
    <div className="flex flex-col items-center space-y-[10px] p-[10px]">
      <input onChange={onChangeId} />
      <input onChange={onChangePassword} />
      <button className="bg-[#B9D7EA] p-[5px] w-[150px]" onClick={onClickLogin}>
        로그인
      </button>
    </div>
  )
}
