import React, { Component } from 'react'
import CartItem from './Item'

export default class CartList extends Component {
    render() {
        return (
            <ul className='collection'>
                {
                    this.props.products.map((product, index) => {
                        return <CartItem key={index} item={product} />
                    })
                }
            </ul>
        )
    }
}