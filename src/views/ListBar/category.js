import React, { Component } from 'react'
import {
    ListItemText,
    ListItem,
    List

} from '@material-ui/core'
export default class category extends Component {
    render() {
         return (
            <div>
                {this.props.listCategory.map(
                    category => (
                        <List component='div' disablePadding>
                            <ListItem button style={{paddingLeft:70}}>
                                <ListItemText>{category.display}</ListItemText>
                            </ListItem>
                        </List>

                    )
                )}
            </div>
        )
    }
}
