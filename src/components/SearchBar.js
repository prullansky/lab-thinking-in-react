import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleSearch = event => {
        this.props.setQuery(event.target.value)
    }


    render() {
        return (
            <div>               
                    <input 
                    type='text'
                    id='search'
                    name='query'
                    placeholder="Search for a product.."
                    value={this.props.query} 
                    onChange={this.handleSearch}        
                    />
            </div>
        )
    }
}


