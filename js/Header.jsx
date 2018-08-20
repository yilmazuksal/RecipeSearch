// @flow

import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm, getAPIData, setIsLoading, setCurrentPage } from './actionCreators'
import { RESET_CURRENT_PAGE } from './actions'

const Header = (props: {
    searchTerm: string,
    handleNewSearch: Function,
    populateResults: (string) => void
}) => (
        <header style={{ display: 'inline-block' }}>
            <div>
                <input type="text" value={props.searchTerm} placeholder="Search by ingredients or name" onChange={props.handleNewSearch} />
            </div>
            <div>
                <button style={{ marginLeft: '5px' }} type="button" onClick={() => props.populateResults(props.searchTerm)}>Search</button>
            </div>
        </header>
    )

const mapStateToProps = (state: State) => ({ searchTerm: state.searchTerm })

const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleNewSearch({ target }: { target: HTMLInputElement }) {
        dispatch(setSearchTerm(target.value))
    },
    populateResults(searchTerm: string): void {
        dispatch(setCurrentPage(1, RESET_CURRENT_PAGE))
        if (searchTerm)
            dispatch(setIsLoading(true))
        dispatch(getAPIData(searchTerm, '1'))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);