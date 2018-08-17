// @flow

declare var module:{
    hot: {
        accept(path: string,callback: ()=>void):void
    }
}

export type Recipe = { id: string, title: string, imageUrl: string,rating: string,ingredients: Array<string>}

declare type ActionType = 'SET_SEARCH_TERM' | 'ADD_API_DATA' | 'ADD_DETAILS' | 'SET_IS_LOADING'

declare type ActionT<A: ActionType,P> = {
    type: A,
    payload: P
}

// declare type State = {searchTerm: string,recipes: {[string]: Recipe}}

export type Action = ActionT<'SET_SEARCH_TERM',string> | ActionT<'ADD_API_DATA',Recipe> | ActionT<'ADD_DETAILS',{id: string,ingredients: Array<string>}> | ActionT<'SET_IS_LOADING',boolean>;