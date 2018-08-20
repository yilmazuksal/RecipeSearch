// @flow

import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import RecipeCard from './RecipeCard'
import { getAPIData, setIsLoading, setCurrentPage } from './actionCreators'
import { INCREMENT_CURRENT_PAGE } from './actions'


class ResultsView extends React.Component<{ isLoading: boolean, recipes: { [string]: Recipe } }>{
    constructor(props) {
        super(props)
        this.containerWithScroll = null
        this.setContainerRef = element => {
            this.containerWithScroll = element;
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false)
    }

    onScroll = () => {
        const container = this.containerWithScroll
        const offset = container.scrollTop + container.clientHeight
        const height = container.scrollHeight
        const loadMoreDataOffset = container.clientHeight / 4

        if (offset >= height - loadMoreDataOffset && !this.props.isLoading) {
            this.props.populateResults(this.props.searchTerm, this.props.page)
        }

    }
    props: { isLoading: boolean, recipes: { [string]: Recipe }, page: number, searchTerm: string, populateResults: (string, number) => void }

    render() {
        console.log(Object.keys(this.props.recipes).length)
        let loadingIndicator
        if (this.props.isLoading) {
            loadingIndicator = <div className='lds-hourglass' />
        }
        return (
            <div className="search" onScroll={this.onScroll} ref={this.setContainerRef} >
                <Header />
                {loadingIndicator}
                <div>
                    {Object.values(this.props.recipes).map(r => <RecipeCard key={r.id} {...r} />)}
                </div>
            </div>
        )
    }

}



const mapStateToProps = (state) => (
    {
        isLoading: state.isLoading,
        recipes: state.recipes,
        page: state.currentPage,
        searchTerm: state.searchTerm
    }
)

const mapDispatchToProps = (dispatch: Dispatch) => ({
    populateResults(searchTerm: string, page: number): void {
        dispatch(setIsLoading(true))
        dispatch(setCurrentPage(page, INCREMENT_CURRENT_PAGE))
        dispatch(getAPIData(searchTerm, page.toString()))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(ResultsView)
