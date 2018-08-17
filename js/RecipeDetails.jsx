// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRecipeDetails } from './actionCreators'
import IngredientsCard from './IngredientsCard'
import RecipeCard from './RecipeCard'


class Details extends Component<Object> {
    componentDidMount() {
        const { recipeId } = this.props.match.params
        this.props.getIngredients(recipeId)
    }
    props: {
        recipe: Recipe,
        match: {
            params: {
                recipeId: string
            }
        },
        getIngredients: Function
    }
    render() {
        return (
            <div className="details">
                <RecipeCard key={this.props.recipe.id} {...this.props.recipe} />
                <IngredientsCard recipeId={this.props.match.params.recipeId} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({ recipe: state.recipes[ownProps.match.params.recipeId] })
const mapDispatchToProps = (dispatch: Function) => ({
    getIngredients(recipeId) {
        dispatch(getRecipeDetails(recipeId))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)
