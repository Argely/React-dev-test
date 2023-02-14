import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../contexts/authContext'
import { useContext } from 'react'


const NavBar = () => {

    const { logout } : any = useContext(Context)

    return (
        <nav className="flex justify-between items-center bg-indigo-800 p-6 w-screen h-8 max-w-full shadow-md">
            <div>
                <h2 className="text-xl font-md-bold text-white mx-3">REACT TEST</h2>
            </div>
            <div>
                <button onClick = {logout}className="mr-4">
                    <FontAwesomeIcon icon={faUser} size='xl' color='white'/>
                    <label className = "ml-4 font-bold text-white" htmlFor="logout">Logout</label>
                </button>
            </div>
        </nav>
    )

}


export default NavBar