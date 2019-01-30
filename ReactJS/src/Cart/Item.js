import React, { Component } from 'react'
import './style.css'


export default class CartItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imagen: '',
            subTotal: 0
        }
    }
    //---------------------------------------------------------------------//
    componentDidMount() {
        this.setState({ imagen: `img/${this.props.item.product.imagen}` })
        this.setState({ subTotal: (this.props.item.product.precio * this.props.item.cantidad) })
    }
    //--------------------------------------------------------------------//
    render() {
        return (
            <div className='row list-group-item'>
                <div className='col s6'>
                    <div className='imagen'>
                        <img className="responsive-img" src={this.state.imagen} alt='thumbnail' />
                    </div>
                </div>
                <div className='col s6 propiedades'>
                    <h4>{this.props.item.product.nombre}</h4>
                    <p><b>Unidades: </b>{this.props.item.cantidad}</p>
                    <p><b>Precio: </b>${(this.props.item.product.precio)}</p>
                    <p><b>SubTotal: </b>${(this.state.subTotal)}</p>
                </div>
            </div>
        )
    }
    //--------------------------------------------------------------------//
}