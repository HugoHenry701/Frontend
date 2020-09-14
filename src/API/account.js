import api from './api'
export const getMe = async () => {
    try {
        const res = await api.get('/auth/me')
        return {
            status: 1,
            data: res.data.data
        }
    } catch (error) {
        return {
            message: 'khong cap quyen truy cap',
            status: 0,
        }
    }
}