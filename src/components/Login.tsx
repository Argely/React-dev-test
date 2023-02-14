import React, { useState, useContext } from "react"
import {user, pass} from "../data/credenciales"
import { Context } from "../contexts/authContext"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Login = () => {

    const {login}:any = useContext(Context) 
    
    const [credentials, setCredentials]:any = useState({
        user : "",
        password: ""
    })

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value        
        })   
    }

    const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(credentials.user === user && credentials.password === pass) {
            login()
        }

    }

    return (
        <div className="container h-screen w-screen max-w-full-screen flex items-center justify-center bg-indigo-800 ">
            <div className="flex flex-col bg-white w-1/5 h-2/5 p-4 rounded-lg">
                <div className="flex flex-col justify-center items-center mb-8">
                    <FontAwesomeIcon icon={faUser} size="5x" color='#3730a3'/>    
                    <h1 className="text-2xl font-bold tracking-wide">Iniciar sesion</h1>
                </div>
                <form className="grid grid-col-1 gap-4">
                    <input type="email" name="user" onChange={changeHandler} placeholder="Correo electronico" className="rounded-md"/>
                    <input type="password" name="password" onChange={changeHandler} placeholder="Contraseña" className="rounded-md"/>
                    <button onClick={submitHandler} className="h-10 mt-3 bg-indigo-800 text-white font-bold rounded-lg hover:bg-indigo-600">Login</button>
                </form>
            </div>
        </div>
        
    )

}

export default Login