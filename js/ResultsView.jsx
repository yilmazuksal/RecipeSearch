// @flow

import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import RecipeCard from './RecipeCard'

const ResultsView = (props: { isLoading: boolean, recipes: { [string]: Recipe } }) => {
    let loadingIndicator
    if (props.isLoading) {
        loadingIndicator = <div className='lds-hourglass' />
    }

    return (
        <div className="search">
            <Header />
            {loadingIndicator}
            <div>
                {Object.values(props.recipes).map(r => <RecipeCard key={r.id} {...r} />)}
            </div>
        </div>
    )
}



const mapStateToProps = (state) => (
    {
        isLoading: state.isLoading,
        recipes: state.recipes
    }
)


export default connect(mapStateToProps, {})(ResultsView)
