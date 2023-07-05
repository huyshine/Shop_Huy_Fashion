import axios from "axios"
import baseURL from "./Instance"

export const axiosJWT = axios.create()

export const loginUser = async (data:any) => {
    const res = await axios.post(`${baseURL}/user/sign-in`, data)
    return res.data
}

export const signupUser = async (data:any) => {
    const res = await axios.post(`${baseURL}/user/sign-up`, data)
    return res.data
}

export const getDetailsUser = async (id : String, access_token : any) => {
    const res = await axiosJWT.get(`${baseURL}/user/get-details/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    },)
    return res.data
}

// export const deleteUser = async (id : String, access_token : any , data : any) => {
//     const res = await axiosJWT.delete(`${baseURL}/user/delete-user/${id}`, data, {
//         headers: {
//             token: `Bearer ${access_token}`,
//         }
//     },)
//     return res.data
// }

export const getAllUser = async (access_token: any) => {
    const res = await axiosJWT.get(`${baseURL}/user/getAll`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    },)
    return res.data
}

export const refreshToken = async (refreshToken :any) => {
    console.log('refreshToken', refreshToken)
    const res = await axios.post(`${baseURL}/user/refresh-token`, {} , {
        headers: {
            token: `Bearer ${refreshToken}`,
        }
    })
    return res.data
}

export const logoutUser = async () => {
    const res = await axios.post(`${baseURL}/user/log-out`)
    return res.data
}

export const updateUser = async (id :String , data : any, access_token :  any) => {
    const res = await axiosJWT.put(`${baseURL}/user/update-user/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

// export const deleteManyUser = async (data : any, access_token : any) => {
//     const res = await axiosJWT.post(`${baseURL}/user/delete-many`, data, {
//         headers: {
//             token: `Bearer ${access_token}`,
//         }
//     })
//     return res.data
// }