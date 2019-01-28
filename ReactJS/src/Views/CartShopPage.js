import React, { Component } from 'react'
import TopBar from './TopBar'
import { db, firebase } from '../Firebase'
import CartList from '../Cart/List.js'
import './mainStyle.css'

export default class CartShopPage extends Component {
    constructor(props) {
        super(props)
        document.title = 'Tienda Online'
        this.state = {
            user: null,
            itemsInCart: [],
            total: 0
        }
    }
    //--------------------------------------------------------------------//
    componentWillMount() {
        document.body.style.backgroundImage = "url('./img/main-fondo.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    //--------------------------------------------------------------------//
    componentDidMount() {
        const { history } = this.props;

        firebase.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.setState({ user: authUser })
                db.getProductsInCart(authUser.uid).on('value', snapshot => {
                    if (snapshot.val()) {
                        this.setState({ itemsInCart: snapshot.val() })
                    } else this.setState({ itemsInCart: [] })
                })
            } else history.push('/login')
        })
    }
    //-------------------------------------------------------------------------//
    shouldComponentUpdate(nexProps, nextState) {
        let total = 0
        nextState.itemsInCart.map((item, index) =>
            total += (item.product.precio * item.cantidad)
        )
        nextState.total = total
        return true
    }
    //-------------------------------------------------------------------------//
    handlePay = () => {
        const { history } = this.props
        db.getProductsInCart(this.state.user.uid).remove().then(() => history.push('/'))
    }
    //--------------------------------------------------------------------------//
    handleCancel = () => {
        const { history } = this.props
        const item = this.state.itemsInCart.map((item, key) => item)
        let disponible = parseInt(item[0].product.disponible, 10)
        let cantidad = parseInt(item[0].cantidad, 10)
        item[0].product.disponible = (disponible + cantidad)
        db.getProduct(item[0].id).update(item[0].product)

        db.getProductsInCart(this.state.user.uid).remove().then(() => history.push('/'))
    }
    //---------------------------------------------------------------------------//
    render() {
        return (
            <div>
                <TopBar itemsInCart={this.state.itemsInCart} />
                <div className='container grey lighten-5'>
                    <div className='row'>
                        <div className='col s8'>
                            <h3> Carrito de compras </h3>
                        </div>
                        <div className='col s7'>
                            <CartList products={this.state.itemsInCart} />
                        </div>
                        <div className='col s5'>
                            <h4> Total: ${(this.state.total).toFixed(2)}</h4>
                            <div className='buttonToolbar'>
                                <button className='btn grey lighten-3 black-text' onClick={this.handleCancel}> Cancelar </button>
                                <button className='btn grey lighten-3 black-text' onClick={this.handlePay}> Pagar </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    //--------------------------------------------------------------------------//
}