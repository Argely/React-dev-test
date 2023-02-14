export interface IUser{
    id:  string;
    nombre: string;
    pApellido: string;
    sApellido: string;
    cedula: string;
    edad : number;
    genero : string;
    direccion : string;
    telefono : string;
    email : string;
    estadoCivil : string;
    hijos : string;
    fechaNac: string;

}


export enum  apiStatus {
    "loading",
    "success",
    "error"

}


export interface IUserState{
    lista : IUser[],
}