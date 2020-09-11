import API from '../API/api'

export const parameterCategory = async () => {
    try {

        const res = await API.get('/parameter/list-category-id')
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


