import {Navigate, Outlet} from 'react-router-dom'
import { Context } from '../contexts/authContext'
import {useContext} from 'react'

export const PrivateRoutes = () => {

    const {isAuthenticated}:any = useContext(Context)

    if (isAuthenticated !== 'true') {
        return <Navigate to="/"/>
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}
