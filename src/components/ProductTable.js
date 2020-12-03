import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
    render() {
        return (
            <div>
                <h1>This is supposed to be the Product Table</h1>
      <table>

      <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
      </thead>

      <tbody>
            <ProductRow 
            products= {this.props.products}
            query= {this.props.query}    
            />
      </tbody>
      
      </table>
            </div>
        )
    }
}
