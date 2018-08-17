// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link) `
    width: 32%;
    border 2px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    padding-right:10px; 
    overflow: hidden;
    color: black;
    text-decoration:none;
`

const Image = styled.img`
    float: left;
    margin-right: 10px;
    width: 250px;
    height: 250px;    
`

class RecipeCard extends Component<Recipe> {
    shouldComponentUpdate() {
        return false
    }
    props: Recipe
    render() {
        return (
            <Wrapper className='show-card' to={`/details/${this.props.id}`}>
                <Image alt={`${this.props.title} Show Poster`} src={this.props.imageUrl} />
                <div>
                    <h3>{this.props.title}</h3>
                    <h4>Rating: ({this.props.rating})</h4>
                </div>
            </Wrapper>
        )
    }
}

export default RecipeCard