import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const signup = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const editUser = async (user, id) => {
    const {data} = await $authHost.put('api/user/' + id, user)
    return data
}

export const fetchUser = async (id) => {
    const {data} = await $host.get('api/user/' + id)
    return data
}

export const fetchUsers = async () => {
    const {data} = await $host.get('api/user')
    return data
}