import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const protectedRoute = ({ component: Component, layout: LoginLayout, token, ...rest }) => {
    return (
        <Route {...rest} render={
            props => {
                if (token != null) {
                    return (
                        <LoginLayout>
                            <Component {...rest} {...props} />
                        </LoginLayout>
                    )
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