import React from 'react'
import { auth } from '../Firebase'
import './mainStyle.css'

export default class TopBar extends React.Component {
    handleLogout = async event => {
        event.preventDefault()
        try {
            await auth.doSignOut()
        } catch (error) {
            alert(error);
        }
    }
    render() {
        return (
            <nav className="grey lighten-4">
                <div className="nav-wrapper grey lighten-4">
                    <a href="/" className="brand-logo grey-text darken-1-text">La Bodega</a>
                    <ul className="right">
                        <li><a href="/"><i className="material-icons grey-text darken-1-text">apps</i></a></li>
                        <li><a href="/cart"><i className="material-icons grey-text darken-1-text">shopping_cart</i>
                            <span className="numProd"> {this.props.itemsInCart.length} </span>
                        </a></li>
                        <li><a href="/"><i className="material-icons grey-text darken-1-text">refresh</i></a></li>
                        <li><a onClick={this.handleLogout}><i className="material-icons grey-text darken-1-text">assignment_return</i></a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}