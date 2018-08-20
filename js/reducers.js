// @flow

import {combineReducers} from 'redux'
import {ADD_INITIAL_API_DATA,SET_SEARCH_TERM,ADD_DETAILS,SET_IS_LOADING,ADD_MORE_API_DATA,INCREMENT_CURRENT_PAGE,RESET_CURRENT_PAGE} from './actions'

const searchTerm = (state='',action: Action) => {
    if(action.type === SET_SEARCH_TERM){
        return action.payload;
    }
    return state;
}

const recipes = (state: RecipeState={},action: Action) => {
    if(action.type === ADD_INITIAL_API_DATA){
        return action.payload
    }
    else if(action.type === ADD_MORE_API_DATA){
        return Object.assign({},state,action.payload)
    }
    else if(action.type === ADD_DETAILS){
        const newState: RecipeState = Object.assign({},state)        
        newState[action.payload.id].ingredients = action.payload.ingredients
        return newState 
    }
    return state
}

const currentPage = (state: number=1,action: Action) => {
    if(action.type === RESET_CURRENT_PAGE){
        return action.payload
    }
    else if(action.type === INCREMENT_CURRENT_PAGE){
        return action.payload + 1
    }
    return state
}

const isLoading = (state=false,action: Action) => {
    if(action.type === SET_IS_LOADING){
        return action.payload
    }
    return state
}


const rootReducer = combineReducers({searchTerm,recipes,isLoading,currentPage})

export default rootReducer