import React, { Component } from 'react'

export default class ProductRow extends Component {
  render() {
    console.log(this.props.products.data[0].price)
    return (
      <div>
      {this.props.products.data.map (product => {
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


// export default class ProductRow extends Component {
 
//   render() {

//   return (

//     {this.props.products.map (product => {

  //     return (         
  //         <tr key={product.id}>
  //       <td>{this.props.products.name}</td>
  //       <td>{this.props.products.price}</td>
  //         </tr>
                  
  //     )}

  //     )
  // }
//   )
// }
// }