import { useContext } from "react"
import { UsersContext } from "./UsersContext"

export const useUsersContext = ()=>{
    return useContext(UsersContext)
}