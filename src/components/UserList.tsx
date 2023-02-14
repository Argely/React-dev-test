import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useEffect} from "react"
import { getUserListAction } from "../features/userForm/userFormSlice"
import { IUser } from "../types/UserTypes"
import { RootState } from "../app/store"

const UserList = () =>{

    const dispatch = useAppDispatch()
    const { lista } = useAppSelector( (state:RootState)  => state.userForm)

    useEffect(() => {
        dispatch(getUserListAction())
        
    }, [dispatch])

    return (
    <div className="container flex flex-col items-center file:w-screen max-w-screen-full-screen h-screen ">
            <div className="mb-4">
                <h2 className="text-2xl ">Lista de usuarios</h2>
            </div>
            <table className="table-auto text-sm text-left text-white rounded-lg">
                <thead className="text-xs text-white uppercase bg-indigo-800">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nombre completo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Genero
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    lista.map((usuario : IUser, index : number) => {
                        return (
                        <tr key={usuario.id} className="bg-white border-b text-black">
                            <td className="px-6 py-4">
                                {usuario.id}
                            </td>
                            <td className="px-6 py-4">
                                {usuario.nombre + " " +  usuario.pApellido + " " + usuario.sApellido}
                            </td>
                            <td className="px-6 py-4">
                                {usuario.email}
                            </td>
                            <td className="px-6 py-4">
                                {usuario.genero}
                            </td>
                        </tr>
                    )
                    })
                }
                </tbody>
            </table>
       </div>
    )

}

export default UserList


