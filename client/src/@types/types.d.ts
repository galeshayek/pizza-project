import { ReactNode } from "react"
import { Role } from "./enums"

export type FCC = (props: { children: ReactNode }) => ReactNode
export type IMyCard = (props: { title: ReactNode, description: ReactNode, image: ReactNode, id: ReactNode }) => ReactNode
export type IsideBar = (props: { title: ReactNode, children: ReactNode }) => ReactNode


export type JwtDecodeType = {
  _id: string,
  role: Role
}

export type AuthContextType = {
    isLoggedIn: boolean,
  role: number,
  user: IUser,
  login: (jwt: string) => void,
  logout: () => void,
}