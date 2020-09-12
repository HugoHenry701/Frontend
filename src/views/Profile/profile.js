import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
    makeStyles
} from '@material-ui/core';

const user = {
    avatar: 'https://scontent.fhph1-1.fna.fbcdn.net/v/t1.0-9/106093887_1565088323650257_1709294526943122853_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=Va-EHqDBaQwAX8bWv1b&_nc_ht=scontent.fhph1-1.fna&oh=f61aff53cda33d722b44cb9075f5fba3&oe=5F7FE692',
    city: 'Hanoi',
    country: 'Vietnam',
    jobTitle: 'Senior Developer',
    name: 'Nguyen Quang Hieu',
    timezone: 'GTM-7'
};

const useStyles = makeStyles(() => ({
    root: {},
    avatar: {
        height: 100,
        width: 100
    }
}));

const Profile = ({ className, ...rest }) => {
    const classes = useStyles();

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            <CardContent>
                <Box
                    alignItems="center"
                    display="flex"
                    flexDirection="column"
                >
                    < Avatar
                        className={classes.avatar}
                        src={user.avatar}
                    />
                    <Typography
                        color="textPrimary"
                        boysBottom
                        variant="h3"
                    >
                        {user.name}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body1"
                    >
                        {`${user.city} ${user.country}`}
                    </Typography>
                    <Typography
                        className={classes.dateText}
                        color="textSecondary"
                        variant="body1"
                    >
                        {`${moment().format('hh:mm A')} ${user.timezone}`}
                    </Typography>
                </Box>
            </CardContent>
            <Divider />
            <CardActions>
                <Button
                    color="primary"
                    fullWidth
                    variant="text"
                >
                    Upload picture
        </Button>
            </CardActions>
        </Card>
    );
};

Profile.propTypes = {
    className: PropTypes.string
};

export default Profile;