import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import Menu from './Menu'
import './header.css'

class Header2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            moduleName: this.props.module
        }
    }

    render() {
        const { moduleName } = this.state;
        const mountTime = new Date();
        return <AppBar
                title={moduleName}
                iconElementLeft={<Menu/>}
               />
    }
}

Header2.defaultProps = {
    module: 'Noname'
};

Header2.propTypes = {
    module: React.PropTypes.string
};

export default Header2