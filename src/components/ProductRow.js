import React, { Component } from 'react'

export default class ProductRow extends Component {



  render() {
    console.log('This is it', this.props.products.data[2].name)
    const filtered = this.props.products.data.filter(
      product => product.name.toLowerCase().includes(this.props.query.toLowerCase())
    )

    return (
      <div>
      {filtered.map(product => {
              return (         
          <tr key={product.id}>

        {/* {product.stocked && 
        <td>
        {product.name}
        </td>
        } */}
              
        <td style={{ color: product.stocked ? 'black' : 'red'}}>
        {product.name}
        </td>
        

        <td>{product.price}</td>
          </tr>                  
      )}
      )}
      </div>
    )
  }
}





