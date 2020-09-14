import api from './api'

export const login = async (username, password) => {
    try {
        const res = await api.post('/auth/login', {
            username,
            password
        })
        return {
            status: 1,
            token: res.data.token
        }
    } catch (error) {
        return {
            message: 'dang nhap that bai',
            status: 0,
        }
    }
}