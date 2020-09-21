import api from './api'

export const login = async (username, password) => {
    const res = await api.post('/auth/login', {
        username,
        password
    })
    if (res.data.status === 1) {
        return {
            status: 1,
            token: res.data.token
        }
    } else {
        return {
            status: 0,
            message: res.data.message
        }
    }
}