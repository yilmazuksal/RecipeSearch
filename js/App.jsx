// @flow

import { Provider } from 'react-redux'
import React from 'react'
import { Switch, Route } from 'react-router'
import store from './store'
import ResultsView from './ResultsView'
import RecipeDetails from './RecipeDetails'

const App = () => (
    <Provider store={store}>
        <div className="app">
            <Switch>
                <Route exact path='/' component={
                    (props: Recipe) => <ResultsView {...props} />
                } />
                <Route exact path='/details/:recipeId' component={
                    (props) => <RecipeDetails {...props} />
                } />
            </Switch>
        </div>
    </Provider>
)

export default App;