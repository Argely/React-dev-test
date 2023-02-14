import httpService from './HttpService';
import apiConfig from './http-common';
import { IUser } from '../types/UserTypes'

export const getUserList = async () =>{
    return await httpService.get<IUser[]>(apiConfig.user)

}

export const createUser = async (data : IUser) =>{
    return await httpService.post<IUser>(apiConfig.user, data)
}