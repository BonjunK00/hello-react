import { create } from 'zustand'

type IsLogInStore = {
  isLogIn: boolean
  setIsLogIn: (isLogIn: boolean) => void
}

export const useIsLogInStore = create<IsLogInStore>((set) => ({
  isLogIn: false,
  setIsLogIn: (isLogIn: boolean) => set({ isLogIn }),
}))
