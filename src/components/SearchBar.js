import React, { Component } from 'react'

export default class SearchBar extends Component {




    
    render() {
        return (
            <div>
                <h1>This is supposed to be a searchbar</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="search"
                    id='search'
                    name='search'
                    placeholder="Search for a product"
                    // value={} 
                    // onChange={}        
                    />
                    </form>
            </div>
        )
    }
}


