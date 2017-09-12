import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Logo from './Logo'
import { Link } from 'react-router-dom'

const style = {
    textDecoration: 'none'
};

const Menu = () => (
    <div>
        <IconMenu
            iconButtonElement={<IconButton style={{padding: 0}}><Logo/></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
            <Link style={style} to={`/`}><MenuItem primaryText="Catalogue"/></Link>
            <Link style={style} to={`/add`}><MenuItem primaryText="Add item"/></Link>
           </IconMenu>
    </div>
);

export default Menu;