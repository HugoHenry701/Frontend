import axios from 'axios'
import Cookies from 'js-cookie'

const API = axios.create({
    baseURL: 'http://localhost:8000/api/v1'
})
API.interceptors.request.use(
    req => {
        console.log(req);
        req.headers.authorization = `Bearer ${Cookies.get('token')}`;
        return req
    }, err => {
        console.log(err);
        return Promise.reject(err)
    })
API.interceptors.response.use(
    res => {
        console.log(res);
        res.headers.authorization = `Bearer ${Cookies.get('token')}`;
        return res
    }, err => {
        console.log(err);
        return Promise.reject(err)
    })


export default API