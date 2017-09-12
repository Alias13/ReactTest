import React, {Component} from 'react'
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionHighlightOff from 'material-ui/svg-icons/action/highlight-off';

const style = {
    //height: 100,
    width: 300,
    margin: 15,
    padding: 5,
    textAlign: 'center',
    display: 'inline-block',
};

class Item extends Component {
    remove() {
        this.props.deleteItem(this.props.index)
    };

    render() {
        const item = this.props.item;

        return (
            <Paper
                style={style}
                zDepth={1}
            >
                <h2>{item.title}</h2>
                <img src={item.image} alt={item.title}/>
                <p>{item.description}</p>
                <h3>$ {item.price}</h3>
                <IconButton tooltip="Delete" onClick={this.remove.bind(this)}>
                    <ActionHighlightOff />
                </IconButton>
            </Paper>
        )
    }
}

export default Item;