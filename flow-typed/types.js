// @flow


declare var module:{
    hot: {
        accept(path: string,callback: ()=>void):void
    }
}

export type Recipe = { id: string, title: string, imageUrl: string,rating: string,ingredients: Array<string>}

declare type ActionType = 'SET_SEARCH_TERM' | 'ADD_INITIAL_API_DATA' | 'ADD_DETAILS' | 'SET_IS_LOADING' | 'ADD_MORE_API_DATA' | 'INCREMENT_CURRENT_PAGE' | 'RESET_CURRENT_PAGE'

declare type ActionT<A: ActionType,P> = {
    type: A,
    payload: P
}

export type State = {
    searchTerm: string,
    recipes: {[string]: Recipe},
    isLoading: boolean,
    currentPage: number
}

export type RecipeState = {[string]: Recipe}

export type Action = ActionT<'SET_SEARCH_TERM',string> | ActionT<'ADD_INITIAL_API_DATA',{[string]: Recipe}> | ActionT<'ADD_DETAILS',{id: string,ingredients: Array<string>}> 
| ActionT<'SET_IS_LOADING',boolean> | ActionT<'ADD_MORE_API_DATA',{[string]: Recipe}> | ActionT<'INCREMENT_CURRENT_PAGE',number> | ActionT<'RESET_CURRENT_PAGE',number>;