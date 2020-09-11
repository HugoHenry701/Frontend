import API from '../API/api'

export const getAllProduct = async (params) => {
    try {

        const res = await API.get('/product', {
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
export const getProductById = async (id) => {
    try {

        const res = await API.get(`/product/${id}`)
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

