import React, { Component } from 'react'

export default class ProductSearch extends Component {
    render() {
        return (
            <div className='busqueda'>
                <label> ¿Que estás buscando?
          <input type='text' name='search' id='searchInput' placeholder='Buscar Producto' onChange={this.props.search} />
                </label>
            </div>
        )
    }
}