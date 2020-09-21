import React from 'react'
import { Route } from 'react-router-dom'

const paramsRoute = ({ component: Component, layout: FadeIn, ...rest }) => {
    return (
        <Route
            {...rest}
            render={routeProps => (
                <FadeIn>
                    <Component {...routeProps} />
                </FadeIn>
            )}
        />
    );
}
export default paramsRoute