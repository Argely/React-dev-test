import {Navigate, Outlet} from 'react-router-dom'
import { Context } from '../contexts/authContext'
import {useContext} from 'react'

const PublicRoute = () => {

    const {isAuthenticated}:any = useContext(Context)

    if (isAuthenticated === 'true') {
        return <Navigate to="/private"/>
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default  PublicRoute