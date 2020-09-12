import React from 'react';
import { withSnackbar } from 'notistack'
import {
  Button,
  Typography,
} from '@material-ui/core'
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
  prevPage = async () => {
    if (this.state.page > 1) {
      await this.setState({
        page: this.state.page - 1
      })
      await this.fetchData()
    } 
  }
  nextPage = async () => {
    if (this.state.page < Math.ceil(this.state.total / this.state.size)) {
      await this.setState({
        page: this.state.page + 1
      })
      await this.fetchData()
    } 
  }
  render() {
    return (
      <div style={{ paddingTop: 65, }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" color='primary' onClick={this.prevPage}>Prev</Button>
          <Typography>{this.state.page}-{Math.ceil(this.state.total / this.state.size)}</Typography>
          <Button variant="contained" color='primary' onClick={this.nextPage}>Next</Button>
        </div>
        <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
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

