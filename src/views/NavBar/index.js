import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListForm from '../ListBar'
import { Drawer } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileOpen: false,
        }
    }
    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen })
    }
    render() {
        return (
            <div style={{ display: 'flex' }}  >
                <CssBaseline />
                <AppBar position="fixed" >
                    <Toolbar style={{ display: "flex", justifyContent: 'space-between', backgroundColor: '# fff3e0' }} >
                        <IconButton
                            style={
                                {
                                    backgroundColor:'# fff3e0'
                                }
                            }
                            aria-label="open drawer"
                            edge="start"
                            onClick={this.handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            VipPro
                        </Typography>
                        <Button color="inherit">Subcribe</Button>
                    </Toolbar>
                </AppBar>
                <nav className={this.props.drawer} aria-lable="List Field">
                    <Hidden smUp implementation="css" >
                        <Drawer
                            variant="temporary"
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                        >
                            <ListForm></ListForm>
                        </Drawer>
                    </Hidden>

                </nav>
            </div>
        )
    }
}
