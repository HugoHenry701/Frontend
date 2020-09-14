import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const protectedRoute = ({ component: Component, token, ...rest }) => {
    return (
        <Route {...rest} render={
            props => {
                if (token != null) {
                    return <Component {...rest} {...props} />
                } else {
                    return <Redirect to={
                        {
                            pathname: '/unauthorized',
                            from: props.location
                        }
                    } />
                }
            }
        }
        />
    )
}

export default protectedRoute