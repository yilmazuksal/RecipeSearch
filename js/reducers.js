// @flow

import {combineReducers} from 'redux'
import {ADD_API_DATA,SET_SEARCH_TERM,ADD_DETAILS,SET_IS_LOADING} from './actions'

const searchTerm = (state='',action: Action) => {
    if(action.type === SET_SEARCH_TERM){
        return action.payload;
    }
    return state;
}

const recipes = (state={},action: Action) => {
    if(action.type === ADD_API_DATA){
        return action.payload
    }
    else if(action.type === ADD_DETAILS){
        const newState = Object.assign({},state)        
        newState[action.payload.id].ingredients = action.payload.ingredients
        return newState 
    }
    return state
}

const isLoading = (state=false,action: Action) => {
    if(action.type === SET_IS_LOADING){
        return action.payload
    }
    return state
}


const rootReducer = combineReducers({searchTerm,recipes,isLoading})

export default rootReducer