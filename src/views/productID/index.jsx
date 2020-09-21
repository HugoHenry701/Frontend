import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import API from '../../API'
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productDetails: []
        }
    }
    fetchProduct = async () => {
        const { match: { params } } = this.props
        const res = await API.product.getProductById(params.productId)
        if (res.status) {
            this.setState({
                productDetails: res.data.data,
            })
        } else {
            alert('cannot get data')
        }
    }
    async componentDidMount() {
        await this.fetchProduct()
    }
    render() {
        return (
            <div style={{ paddingTop: 72 }}>
                <Card style={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            style={{
                                height: 0,
                                paddingTop: '100%'
                            }}
                            image={this.state.productDetails.imageUrl}
                            title={this.state.productDetails.display}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.state.productDetails.display}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.state.productDetails.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
export default withRouter(index)