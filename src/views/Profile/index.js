import React, { useState, useEffect } from 'react';
import {
    Container,
    Grid,
    makeStyles,
    Button,
} from '@material-ui/core';
import Page from '../../components/Page';
import Profile from './profile';
import ProfileDetails from './profileDetails';
import api from '../../API'
import Cookies from 'js-cookie'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: 65
    }
}));

const Account = () => {
    const classes = useStyles();
    const [user, setUser] = useState([])
    useEffect(() => {
        const fetchUserdata = async () => {
            const res = await api.account.getMe()
            if (res.status) {
                setUser(res.data)
                // console.log(res.data)
            } else {
                // res.send('khong duoc cap du lieu')
                console.log('unreachable');
            }
        }
        fetchUserdata()
    }, [])

    const handleLogout = () => {
        Cookies.remove('token')
    }
    return (
        <Page
            className={classes.root}
            title="Account"

        >
            <Button
                onClick={handleLogout}
                href='/SignIn'
            >Sign Out</Button>
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}
                    >
                        <Profile user={user} />
                    </Grid>
                    <Grid
                        item
                        lg={8}
                        md={6}
                        xs={12}
                    >
                        <ProfileDetails user={user} />
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
};

export default Account;