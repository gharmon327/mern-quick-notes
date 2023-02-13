import { getToken } from "./users-service"

const BASE_URL = '/api/users'

export async function signUp(userData){
    // // pausing code to wait for response back from server
    // const res = await fetch(BASE_URL, {
    //     // I want to make a user
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(userData)
    // })
    // // if success 
    // // we get a true on res.ok if status is in the 200s
    // if (res.ok){
    //     return res.json()
    // }else{
    //     // if error throw new error
    //     throw new Error('Invalid Sign Up')
    // }
    return sendRequest(BASE_URL, 'POST', userData)
}

export async function logIn(credentials) {
    // const res = await fetch(BASE_URL + '/login', { 
    // method: 'POST',
    // headers: {
    //     'Content-Type': 'application/json'
    // },
    // body: JSON.stringify(credentials)
    // })
    // if (res.ok) {
    //     return res.json()
    // } else {
    //     throw new Error('Invalid Log In')
    // }
    return sendRequest(BASE_URL + '/login', 'POST', credentials)
}

export default async function sendRequest(url, method='GET', payload=null){
    const options = { method }
    if (payload){
        // if payload set the headers for content 
        options.headers = { 'Content-Type': 'application/json' }
        options.body = JSON.stringify(payload)
    }
    // if theres a token, include it in the request
    const token = getToken()
    if (token) {
        // make sure we have headers on our options
        options.headers = options.headers || {}
        // add in our token with an Authorization header
        options.headers.Authorization = `Bearer ${token}`
        // make sure you capitalize Authorization
        // best practice is to begin with "Bearer"
    }
    const res = await fetch(url, options)
    if (res.ok) {
        return res.json()
    } else {
        throw new Error('Bad Request')
    }
}

export async function checkToken(){
    return sendRequest(BASE_URL + '/check-token')
}