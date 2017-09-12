import React from 'react'
import Item from './Item'

const style = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
};

const Items = (props) => {
    const Items = props.items.map((item, i) => {
        return <Item key={i}
                     index={i}
                     deleteItem={props.deleteItem}
                     item={item}>
               </Item>
    });

    return <div style={style}>{Items}</div>
};

export default Items
