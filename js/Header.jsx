// @flow

import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm, getAPIData, setIsLoading } from './actionCreators'

const Header = (props: {
    searchTerm: string,
    handleNewSearch: Function,
    populateResults: Function
}) => (
        <header style={{ display: 'inline-block' }}>
            <div>
                <input type="text" value={props.searchTerm} placeholder="Search" onChange={props.handleNewSearch} />
            </div>
            <div>
                <button style={{ marginLeft: '5px' }} type="button" onClick={() => props.populateResults(props.searchTerm)}>Search</button>
            </div>
        </header>
    )

const mapStateToProps = (state) => ({ searchTerm: state.searchTerm })

const mapDispatchToProps = (dispatch: Function) => ({
    handleNewSearch(event) {
        dispatch(setSearchTerm(event.target.value))
    },
    populateResults(searchTerm: string): void {
        dispatch(setIsLoading(true))
        dispatch(getAPIData(searchTerm, '1'))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);