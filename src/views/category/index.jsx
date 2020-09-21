import React, { Component } from 'react'
import {
    ListItemText,
    ListItem,
    List,
    Link
} from '@material-ui/core'
export default class category extends Component {
    render() {
        return (
            <div>
                {this.props.listCategory.map(
                    category => (
                        <List component='div' disablePadding>
                            <ListItem button style={{ paddingLeft: 70 }}  >
                                <Link 
                                    href={`/category/${category.categoryId}`}
                                >
                                    <ListItemText>{category.display}</ListItemText>
                                </Link>
                            </ListItem>
                        </List>

                    )
                )}
            </div>
        )
    }
}
