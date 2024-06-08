import axios from "axios";
import { userUrl } from "./url";
import { Ilogin, Iregister } from "../@types/types.forms";
import { IRoleChange, IUpdateUser, IUser,  } from "../@types/types.user";

export const userService = {
login:  (data: Ilogin)=> {
    return  axios.post(userUrl + '/login', data);
},
getUserById: (id: string, jwt: string)=>{
    return axios.get<IUser>(userUrl  + "/"+id,{
        headers: {
            'Authorization': jwt
        }
    })
},

register: (data: Iregister)=> axios.post(userUrl, data),

getImage: (imgUrl: string)=> axios.get(`${userUrl}/${imgUrl}`),

uploadImage: (jwt: string, id: string, data: FormData) => axios.post(`${userUrl}/${id}`,data,{headers:{
    "Content-Type": 'multipart/form-data; boundary=<calculated when request is sent>',
    'Authorization': jwt
}}),

getAll: (jwt: string)=> axios.get(userUrl,{headers:{
    'Authorization': jwt
}}),

getById: (id: string, jwt: string) =>  axios.get(`${userUrl}/${id}`, {headers:{
    'Authorization': jwt
}}),

update: (id: string, jwt: string, data: IUpdateUser) => axios.put(`${userUrl}/${id}`,data, {headers:{
    'Authorization': jwt
}}),

delete: (id: string, jwt: string) => axios.delete(`${userUrl}/${id}`, {headers:{
    'Authorization': jwt
}}),

changeRole: (jwt:string, id: string, role: IRoleChange)=> axios.put(`${userUrl}/changerole/${id}`, role,{headers:{
    'Authorization': jwt
}})
};
