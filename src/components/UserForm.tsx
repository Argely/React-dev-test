import React, { useState } from "react"
import { useAppDispatch } from "../app/hooks"
import {createUserAction} from "../features/userForm/userFormSlice"
import nextId from "react-id-generator";
import { useNavigate } from "react-router-dom";

const UserForm = () =>{

    const navegar = useNavigate()
    const [ state, setState ]  = useState({
        nombre: "",
        pApellido: "",
        sApellido: "",
        cedula: "",
        edad: 0,
        genero: "",
        direccion: "",
        telefono: "",
        email: "",
        estadoCivil: "",
        hijos: "",
        fechaNac: new Date(Date.now()).toDateString(),
    })


    const dispatch = useAppDispatch()

    const handleChange = (e: any) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })

    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        
       e.preventDefault()
       dispatch(createUserAction(
        {
            ...state,
            id: nextId('user-'),
        }
       ))
        
       navegar('/private/user-list')
       

    }

    return(

        <div className="container box-content w-1/4 p-5 flex flex-col justify-center mx-4 my-20 border-2 border-indigo-800 rounded-lg">
            <h1 className="font-bold text-2xl mb-4">Registrar Usuario</h1>
            <form onSubmit={handleSubmit} className=" w-full grid grid-cols-2 gap-2">
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required className="col-span-2 rounded-md"/>
                <input type="text" name="pApellido" placeholder="Primer apellido" onChange={handleChange} className="rounded-md" />
                <input type="text" name="sApellido" placeholder="Segundo Apellido" onChange={handleChange} className="rounded-md"/>
                <input type="text" name="cedula" placeholder="Cedula" onChange={handleChange} className="col-span-2 rounded-md"/>
                <input type="text" name="edad" placeholder="Edad" onChange={handleChange} className="rounded-md"/>
                <select name="genero" onChange={handleChange} className="rounded-md">
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Prefiero no decir</option>
                </select>
                <input type="text" name="direccion" placeholder="Direccion" onChange={handleChange} className="col-span-2 rounded-md"/>
                <input type="email" name="email" placeholder="Correo electronico" onChange={handleChange} className="col-span-2 rounded-md"/>
                <input type="text" name="telefono" placeholder="Telefono" onChange={handleChange} className="rounded-md"/>
                <select name="estadoCivil" onChange={handleChange} required className="rounded-md">
                    <option className="bg-disabled-gray" disabled hidden >Estado Civil</option>
                    <option value="casado">Casado</option>
                    <option value="soltero">Soltero</option>
                    <option value="unionLibre">Union libre</option>
                    <option value="viudo">Viudo</option>
                </select>
                <div className="input-hijos flex flex-col items-center justify-center">
                    <label htmlFor="" className="mr-2">Tiene hijos?</label>
                    <div className="flex items-center mr-4">
                        <div className="mr-4">
                            <input type="radio" name="hijos" value="si"  onChange={handleChange} className="mr-1"/>
                            <label htmlFor="si" className="ml-2">Si</label>
                        </div>
                        <div>
                            <input type="radio" name="hijos" value="no" onChange={handleChange} className="mr-1" />
                            <label htmlFor="si" className="ml-2">No</label>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="date">Fecha de Nacimiento</label>
                    <input type="date" placeholder="Fecha de nacimiento" name="fNacimiento" id="" onChange={handleChange} className="rounded-md"/>
                </div>
                
                   
                
                <button type="submit" className="col-span-2 h-10 mt-4 bg-indigo-800 text-white font-bold rounded-lg hover:bg-indigo-600">Guardar</button>
            </form>
        </div>       
        
    )


}


export default UserForm