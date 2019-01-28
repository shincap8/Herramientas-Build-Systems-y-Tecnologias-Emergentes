import React, { Component } from 'react'
import { auth } from '../Firebase'
import './loginStyle.css'

//--------------------------------------------------------------------//
export default class LoginPage extends Component {
    constructor(props) {
        super(props)
        document.title = 'Iniciar Sesión'
        this.state = {
            email: '',
            password: '',
            emailValid: false,
            passValid: false,
            error: null
        }
    }
    //-----------------------------------------------------------------//
    componentWillMount() {
        document.body.style.backgroundImage = "url('./img/login-fondo.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    //----------------------------------------------------------------//
    handleSubmit = event => {
        event.preventDefault()
        const { history } = this.props
        auth.doSignIn(this.state.email, this.state.password).then(authUser => {
            console.log('Usuario validado', authUser)
            history.push('/')
        }).catch(error => {
            this.setState({ error: error })
            alert('Error al inicio de Sesion');
            console.log('Error al intentar logearse', error);
        })
    }
    //----------------------------------------------------------------//
    render() {
        return (
            <div className='content'>
                <h5> Inicia Sesión </h5>
                <form onSubmit={this.handleSubmit}>
                    <label className="left">Correo Electronico</label>
                    <input name='email' type='email' pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" onChange={event => this.setState({ 'email': event.target.value })} />
                    <label className="left">Contraseña</label>
                    <input name='password' type='password' onChange={event => this.setState({ 'password': event.target.value })} />
                    <button className="btn waves-effect green darken-1" type='submit'> Ingresar </button>
                </form>
            </div>
        )
    }
    //-----------------------------------------------------------------//
}