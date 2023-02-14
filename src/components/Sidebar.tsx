import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faList } from '@fortawesome/free-solid-svg-icons'



const Sidebar = () => {
    return(
        <section className="w-full h-screen bg-indigo-800">
            <div className="py-10">
                <ul className="flex flex-col justify-center items-center w-full">
                    <li className="p-3 text-white font-bold inline-block w-full border-b-2 text-center hover:bg-indigo-600">
                        <div className="mr-4">
                            <FontAwesomeIcon icon={faUserPlus} size='xl' color='white'/>
                        </div>
                        <button>Agregar usuarios</button>
                    </li>
                    <li className="flex-col p-3 text-white font-bold inline-block w-full border-b-2 text-center hover:bg-indigo-600">
                        <div className="mr-4">
                            <FontAwesomeIcon icon={faList} size='xl' color='white'/>
                        </div>
                        <button>Lista de usuarios</button>
                    </li>
                
                </ul>
            </div>

        </section>
    )
}

export default Sidebar