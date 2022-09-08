import axios from "axios";
import { parseCookies } from 'nookies'

const { 'donate-token': token } = parseCookies()

export const api = axios.create({
  baseURL: "http://localhost:3003/"
});


if(token){
    api.defaults.headers['Authorization'] = `Bearer ${token}`
}
