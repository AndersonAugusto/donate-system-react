import { api } from '../environments/environment'

const Auth = async (email, password) => {

    const token = await api.post('login' , {login: email, senha: password})

    return  token
} 

export default Auth