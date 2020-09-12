import React, { Component } from 'react'
import {
    Paper,
    ListSubheader,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@material-ui/core'
import {
    ExpandLess,
    ExpandMore,
    Home,
    VpnKey,
    Category,
    AccountCircle,
} from '@material-ui/icons'
import CategoryForm from './category'
import API from '../../API'
import {
    Link,
} from 'react-router-dom'


export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listCategory: [],
            total: 0,
            open: false,

        }
    }
    async fetchData() {
        const res = await API.category.parameterCategory()
        console.log(res.data.data)
        if (res.status) {
            this.setState({
                listCategory: res.data.data,
                total: res.data.metadata.length
            })
        } else {
            this.props.enqueueSnackbar(res.message, { varriant: 'error' })
        }
    }
    async componentDidMount() {
        await this.fetchData()
    }
    handleClick = () => {
        this.setState({ open: !this.state.open })
    }
    render() {
        return (
            <Paper>
                <List
                    component='nav'
                    aria-labelledby='nested-list-subheader'
                    subheader={
                        <ListSubheader component='div' id='nested-list-subheader'>
                        </ListSubheader>
                    }
                    style={{
                        width: '100%',
                        maxWidth: 360,
                        backgroundColor:'#fff3e0',
                        padding: 8,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Link to="/">
                        <ListItem button>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="HomePage" />
                        </ListItem>
                    </Link>
                    <Link to="/SignIn">
                        <ListItem button>
                            <ListItemIcon>
                                <VpnKey />
                            </ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItem>
                    </Link>
                    <Link to="/SignUp">
                        <ListItem button>
                            <ListItemIcon>
                                <VpnKey />
                            </ListItemIcon>
                            <ListItemText primary="SignUp" />
                        </ListItem>
                    </Link>
                    <Link to="/profile">
                        <ListItem button>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItem>
                    </Link>
                    <ListItem button onClick={this.handleClick}>
                        <ListItemIcon>
                            <Category />
                        </ListItemIcon>
                        <ListItemText primary="Category" />
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.open} timeout='auto' unmountOnExit>
                        <CategoryForm listCategory={this.state.listCategory}></CategoryForm>
                    </Collapse>
                </List>
            </Paper>
        )
    }
}
