// @flow

import React from 'react'
import { connect } from 'react-redux'

const IngredientCard = (props: { ingredients: Array<string> }) => {
    let content;
    if (props.ingredients && props.ingredients.length > 0) {
        content = <ul className="IngredientsList">{props.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}</ul>
    }
    else {
        content = <div className='lds-hourglass' />
    }
    return (
        <div>
            <div className="title">Ingredients</div>
            <div>
                {content}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({ ingredients: state.recipes[ownProps.recipeId].ingredients })

export default connect(mapStateToProps, {})(IngredientCard)