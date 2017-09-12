import React from 'react'
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import ActionHighlightOff from 'material-ui/svg-icons/action/highlight-off';
import ActionInfo from 'material-ui/svg-icons/action/info';

const style = {
    /*height: '100',*/
    flexBasis: 130,
    flexShrink: 0,
    marginTop: 15,
    padding: 5,
    textAlign: 'center',
};

const Sidebar = (props) => {

    return (
        <div style={style}>
            <List>
                <ListItem primaryText="Total amount" secondaryText={props.totalAmount}  />
                <ListItem primaryText="Total cost" secondaryText={props.totalCost} />
                <ListItem primaryText="Average price" secondaryText={props.avgPrice} />
            </List>
            <RaisedButton
                label="Clear"
                onClick={props.clear}
            />
        </div>
    )
};

export default Sidebar

/*
style={{display: 'inline-block'}}*/
