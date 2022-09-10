import React , { useContext } from 'react'
import { useForm } from 'react-hook-form'
import AuthContext  from '../../context/auth'
import './login.scss'
import styled from 'styled-components'
import Logo from '../../assets/img/logo.png'


const Login = () => {

    const login = useContext(AuthContext)
    console.log(login)

    const { register, handleSubmit } = useForm();

    const Button = styled.button `
        width: 80%;
        color: #fff;
        padding: 15px 0px;
        background-color: #75C0A5;
        border:1px solid #75C0A5;
        border-radius: 70px;
        font-weight: bolder;

        @media (max-width: 768px){
            background-color: #376c59;
        }
    `
    async function handleLogin(email , password) {

        await login(email , password)
    }

    return (
        <section className="box-login">
            <div className="img">
                <img src={ Logo } alt="logo" />
            </div>
            <div className="form-login">
                <form onSubmit={handleSubmit(handleLogin)}>
                    <h1>LOGIN</h1>
                    <input 
                        className='input-login'
                        label="Login"
                        type="text"
                        {...register('email')}
                        autoComplete="off"
                        placeholder="Usuario"
                    />
                    <input 
                        className='input-login'
                        label="Senha"
                        type="password"
                        autoComplete="off"
                        {...register('password')}
                        placeholder="Senha"
                    />
                    <div className='btn-access'>
                        <Button type='submit'> Entrar </Button> 
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Login