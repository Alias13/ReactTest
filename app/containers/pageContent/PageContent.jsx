import React, { Component } from 'react'

const style = {
    padding: 10,
    backgroundColor: '#f1f1f1',
    display: 'flex',
    justifyContent: 'center',
    height: '100%'
};

class PageContent extends Component {
    render() {
        return (
            <div style={style}>{this.props.children}</div>
        )
    }
}

export default PageContent