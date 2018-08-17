// @flow

import axios from 'axios'
import {SET_SEARCH_TERM,ADD_API_DATA,ADD_DETAILS,SET_IS_LOADING} from './actions'

export function setSearchTerm(searchTerm: string){
    return {type: SET_SEARCH_TERM,payload: searchTerm}
} 

export function addAPIData(apiData: { [string]: Recipe }){
    return {type: ADD_API_DATA,payload:apiData}
}

export function addDetails(apiData: {id: string,ingredients: Array<string>}  ){
    return {type: ADD_DETAILS,payload:apiData}
}

export function setIsLoading(isLoading: boolean){
    return {type: SET_IS_LOADING,payload: isLoading}
}

export function getAPIData(searchTerm: string,page: string){
    return (dispatch: Function) => {
        axios.get(`http://localhost:8081?searchTerm=${searchTerm}&page=${page}`)
        .then((response: { data: { count: Number,recipes: Array<Object> } }) => {
            const recipeData:{ [string]: Recipe } = {} 
            response.data.recipes.forEach(r => {recipeData[r.recipe_id] = {id:r.recipe_id,title:r.title, imageUrl: r.image_url,rating:r.social_rank.toFixed(2),ingredients:[]}} )
            dispatch(addAPIData(recipeData))
            dispatch(setIsLoading(false))
        })
        .catch(error => {
            console.log('axios error',error) // eslint-disable-line no-console
        })
    }
}


export function getRecipeDetails(recipeId: string){
    return (dispatch: Function) => {
        axios.get(`http://localhost:8081/details?recipeId=${recipeId}`)
        .then((response: { data: { recipe: Object } }) => {
            const r = response.data.recipe
            const recipe = {id:r.recipe_id,ingredients:r.ingredients}
            dispatch(addDetails(recipe))
        })
        .catch(error => {
            console.log('axios error',error) // eslint-disable-line no-console
        })
    }
}