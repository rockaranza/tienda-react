import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemsListContainer = props => {
    return (
        <div style={{display: 'flex', flexDirection:'column',justifyContent: 'center', alignItems:'center',paddingTop: '3rem'}}>
            <h2>{props.greeting}</h2>
            <ItemCount iniStock={1} maxStock={10}/>
        </div>
    )
}

export default ItemsListContainer
