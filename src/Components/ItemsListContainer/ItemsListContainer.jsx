import React from 'react';

const ItemsListContainer = props => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '3rem'}}>
            <h2>{props.greeting}</h2>
        </div>
    )
}

export default ItemsListContainer
