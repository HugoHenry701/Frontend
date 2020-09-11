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

    console.log(res.data.data)
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
    } else {
      alert('First page already')
    }

  }
  nextPage = async () => {
    if (this.state.page < Math.ceil(this.state.total / this.state.size)) {
      await this.setState({
        page: this.state.page + 1
      })
      await this.fetchData()
    } else {
      alert('Page run out')
    }
  }
  render() {
    return (
      <div style={{ paddingTop: 65, }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" style={{ backgroundColor: '#fafafa' }} onClick={this.prevPage}>Prev</Button>
          <Typography>{this.state.page}-{Math.ceil(this.state.total / this.state.size)}</Typography>
          <Button variant="contained" style={{ backgroundColor: '#fafafa' }} onClick={this.nextPage}>Next</Button>
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

