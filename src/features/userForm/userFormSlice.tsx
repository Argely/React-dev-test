import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createUser, getUserList } from '../../services/userService'
import { IUser, IUserState } from '../../types/UserTypes'

export const getUserListAction = createAsyncThunk("userForm/getUserListAction", async () => {

   const response = await getUserList()
   return response.data

})

export const createUserAction = createAsyncThunk("userForm/createtUserListAction", async (data : IUser) => {

    const response = await createUser(data)
    return response.data
 
 })

const initialState:IUserState = {
    lista : [],

}


const userFormSlice = createSlice({
    name: 'userForm',
    initialState,
    reducers: {

    },
    extraReducers : (builder) => {

        builder.addCase(getUserListAction.fulfilled, (state, action) => {
            state.lista = action.payload

        });

        builder.addCase(createUserAction.fulfilled, (state) => {
            console.log("Usuario creado")
        })

    }
    
})



export const {addUser, listUsers} : any = userFormSlice.actions
export default  userFormSlice.reducer