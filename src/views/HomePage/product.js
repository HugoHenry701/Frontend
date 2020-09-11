import {
    Typography,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    IconButton,
    Avatar,
    Link,
} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors'

import React, { Component } from 'react'

export default class product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
        }
    }
    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        return (
            <div>
                <Card style={
                    {
                        maxWidth: 345,
                    }
                }>
                    <CardHeader
                        avatar={
                            <Avatar aria-label='guitar' style={{
                                backgroundColor: red[500],
                            }}>
                                G
                    </Avatar>
                        }
                        action={
                            <IconButton aria-label='settings' >
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={this.props.product.display}
                        subheader={this.props.product.priceSale}
                    />
                    <CardMedia
                        style={{
                            height: 0,
                            paddingTop: '100%'
                        }}
                        image={this.props.product.imageUrl}
                        title={this.props.product.display}
                    />
                    <CardContent>
                        <Typography variant='body2' color='textSecondary' component='p' >
                            {this.props.product.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label='add to favorites'>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label='share'>
                            <ShareIcon />
                        </IconButton>
                        <IconButton>
                            <Link href='/shopCart'>
                                <AddShoppingCartIcon />
                            </Link>
                        </IconButton>
                        <IconButton
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label='show more'
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Provider:{this.props.product.provider}</Typography>
                            <Typography paragraph>Status:{this.props.product.status}</Typography>
                            <Typography paragraph>Ship day:{this.props.product.shipday}</Typography>
                            <Typography paragraph>Available at:{this.props.product.created_at}</Typography>
                        </CardContent>
                    </Collapse>
                </Card>


            </div>
        )
    }
}
