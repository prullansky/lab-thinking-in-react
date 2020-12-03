import React, { Component } from 'react'
import SearchBar from './SearchBar.js'
import ProductTable from './ProductTable.js'




export default class FilterableProductTable extends Component {

    state = {
        products: this.props.products,
        query: ''
    }

    setQuery = query => {
        this.setState({
          query: query
        })
      }
    
    render() {
        return (
            <div>
                <h1>IronStore</h1>
                
                <SearchBar 
                query={this.state.query}
                setQuery={this.setQuery}

                />
                <ProductTable 
                products= {this.props.products}
                query={this.state.query}                
                />
            </div>
        )
    }
}
