import React, { Component } from 'react'
import Modal from 'react-modal'
import './style.css'


export default class ProductItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cantidad: 1,
            ShowModal: false
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    //--------------------------------------------------------------------//
    handleChange = (event) => this.setState({ cantidad: event.target.value })
    //--------------------------------------------------------------------//
    handleOpenModal = () => this.setState({ showModal: true })
    //--------------------------------------------------------------------//
    handleCloseModal = () => this.setState({ showModal: false })
    //--------------------------------------------------------------------//
    handleAddItem = () => {
        this.props.add(this.props.product, this.state.cantidad)
    }
    //--------------------------------------------------------------------//
    render() {
        const imagen = `img/${this.props.product.imagen}`;
        return (
            <div className='content-item'>
                <div className='imagen'>
                    <img className="responsive-img" src={imagen} alt={this.props.product.nombre} />
                </div>
                <h4> {this.props.product.nombre} </h4>
                <p><b>Precio: </b>${(this.props.product.precio).toFixed(2)}</p>
                <p><b>Disponible: </b> {this.props.product.disponible}</p>
                <div className='row'>
                    <div className='col s4'>
                        <button className='blue darken-3 btn' onClick={this.handleOpenModal}> Ver más </button>
                    </div>
                    <div className='col s4'>
                        <button className='yellow darken-3 btn' onClick={this.handleAddItem}> Añadir </button>
                    </div>
                    <div className='col offset-s1 s3'>
                        <input type='number' min='1' max={this.props.product.disponible} name='cantidad' defaultValue='1'
                            onChange={this.handleChange.bind(this)} />
                    </div>
                </div>

                <Modal isOpen={this.state.showModal} contentLabel="onRequestClose Example" onRequestClose={this.handleCloseModal} className="Modal">
                    <div className='imagen-modal'>
                        <img className="responsive-img" src={imagen} alt='thumbnail' />
                    </div>
                    <h4> {this.props.product.nombre} </h4>
                    <p><b>Descripcion: </b> {this.props.product.descripcion}</p>
                    <p><b>Precio: </b>${' '}{(this.props.product.precio).toFixed(2)}</p>
                    <p><b>Unidades Disponibles: </b> {this.props.product.disponible}</p>
                    <button className="btn" onClick={this.handleCloseModal}>Cerrar</button>
                </Modal>

            </div>
        )
    }
    //----------------------------------------------------------------------//
}