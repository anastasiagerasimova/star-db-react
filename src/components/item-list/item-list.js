import React from 'react';

import './item-list.css';

const ItemList = (props) => {
    const {itemList, onItemSelected, children: renderItem} = props
    const items = itemList.map((item) => {
        const {id} = item
        const label = renderItem(item)
        return (
            <li 
                key={id}
                className="list-group-item list-group-item-action"
                onClick={() => {onItemSelected(id)}}
            >
                {label}
            </li>
        )
    })
    
    return (
        <ul className="list-group">
            {items}
        </ul>
    )
}

export default ItemList