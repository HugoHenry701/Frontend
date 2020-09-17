import React from 'react';
import { withSnackbar } from 'notistack'
import {
} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import ProductForm from './product'


import API from '../../API'
class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listProduct: [],
      total: 0,
      page: 1,
      size: 8,
    }
  }
  async fetchData() {
    const res = await API.product.getAllProduct({
      page: this.state.page,
      size: this.state.size
    })

    if (res.status) {
      this.setState({
        listProduct: res.data.data,
        total: res.data.metadata.total
      })
    } else {
      this.props.enqueueSnackbar(res.message, { variant: 'error' })
    }
  }
  async componentDidMount() {
    await this.fetchData()
  }
  handleChange = async (event, value) => {
    await this.setState({
      page: value
    })
    await this.fetchData()
  }
  render() {
    return (
      <div style={{ paddingTop: 74, }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Pagination count={Math.ceil(this.state.total / this.state.size)} page={this.state.page} onChange={this.handleChange} variant="outlined" color="primary" />
        </div>
        <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', paddingTop: 8 }}>
          {
            this.state.listProduct.map(
              (product) => (
                <ProductForm product={product}></ProductForm>
              )
            )
          }
        </div>
      </div>)
  }
}

export default withSnackbar(HomePage);

