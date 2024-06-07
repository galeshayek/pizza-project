import axios from "axios";
import { recipeUrl } from "./url";
import { ICreateRecipe } from "../@types/types.recipe";

export const recipeSerivce = {
getAllRecipes: ()=>{
    return axios.get(recipeUrl)
},

getRecipeById: (recipeId: string)=>{
    return axios.get(`${recipeUrl}/${recipeId}`)
},

createRecipe: (jwt: string, data:  ICreateRecipe)=>{
return axios.post(recipeUrl, data, {
    headers:{
        'Authorization': jwt
    }
})
},

getMyRecipes: (jwt: string)=>{
    return axios.get(`${recipeUrl}/my-recipes`,{
        headers:{
            "Authorization": jwt
        }
    })
},

updateRecipe: (jwt: string, id: string, data: ICreateRecipe)=>{
    return axios.put(`${recipeUrl}/${id}`,data,{
        headers:{
            'Authorization': jwt
        }
    });
},

addFav: (jwt: string, id: string)=>{
return axios.patch(`${recipeUrl}/${id}`, {},{headers:{
    'Authorization': jwt
}})
},

delete: (jwt: string, id: string)=>{
    return axios.delete(`${recipeUrl}/${id}`,{headers:{
        'Authorization': jwt
    }} )
}
};
