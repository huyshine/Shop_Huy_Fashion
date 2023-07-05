import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    phone: '',
    // address: '',
    // avatar: '',
    access_token: '',
    id: '',
    isAdmin: false,
    // city: '',
    refreshToken: ''
}

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const { name = '', email = '', access_token = '', phone = '', _id = '', isAdmin,refreshToken = '' } = action.payload
            state.name = name ? name : state.name;
            state.email = email ? email : state.email;
            state.phone = phone ? phone : state.phone;
            state.id = _id ? _id : state.id;
            state.access_token = access_token ? access_token : state.access_token;
            state.isAdmin = isAdmin ? isAdmin : state.isAdmin;
            state.refreshToken = refreshToken ? refreshToken : state.refreshToken;
            console.log("state oke" , state.email);
    
        },
        resetUser: (state) => {
            state.name = '';
            state.email = '';
            state.phone = '';
            state.id = '';
            state.access_token = '';
            state.isAdmin = false;
            state.refreshToken = ''
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlide.actions

export default userSlide.reducer