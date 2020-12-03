import React, { Component } from 'react'
import SearchBar from './SearchBar.js'
import ProductTable from './ProductTable.js'




export default class FilterableProductTable extends Component {

    state = {
        products: this.props.products
    }

    


    render() {
        return (
            <div>
                <h1>IronStore</h1>
                
                <SearchBar products= {this.props.products}/>
                <ProductTable products= {this.props.products}/>
            </div>
        )
    }
}
