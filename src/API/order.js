import API from './api'

export const getallOrder = async (params) => {
    try {

        const res = await API.get('/order', {
            params
        })
        return {
            status: true,
            data: res.data
        }
    } catch (err) {
        return {
            message: 'cannot get data',
            status: false
        }
    }

}