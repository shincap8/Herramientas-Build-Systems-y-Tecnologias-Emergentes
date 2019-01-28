import React, { Component } from 'react'

export default class ProductSearch extends Component {
    render() {
        return (
            <div className='busqueda'>
                <label>¿Qué estás buscando?</label>
                <input type='text' name='search' id='searchInput' placeholder='Buscar Producto' onChange={this.props.search} />
            </div>
        )
    }
}