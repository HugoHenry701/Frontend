import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import API from '../../API'
import { withSnackbar } from 'notistack'
import Pagination from '@material-ui/lab/Pagination'


class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOrder: [],
      total: 0,
      page: 1,
      size: 8,

    }
  }
  async fetchData() {
    const res = await API.order.getallOrder({
      page: this.state.page,
      size: this.state.size
    })

    if (res.status) {
      this.setState({
        listOrder: res.data.data,
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
      <div style={{ paddingTop: 72 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Pagination count={Math.ceil(this.state.total / this.state.size)} page={this.state.page} onChange={this.handleChange} variant="outlined" color="primary" />
        </div>
        <div style={{paddingTop:3}}>
          <TableContainer component={Paper}>
            <Table style={{ maxWidth: 'inherit' }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Order receiving</TableCell>
                  <TableCell align="left">Username</TableCell>
                  <TableCell align="left">Product</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.listOrder.map((row) => (
                  <TableRow key={row.orderId}>
                    <TableCell component="th" scope="row">
                      {row.orderId}
                    </TableCell>
                    <TableCell align="left">{row.username}</TableCell>
                    <TableCell align="left">{row.productId}</TableCell>
                    <TableCell align="left">{row.price}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    )
  }
}
export default withSnackbar(index)
