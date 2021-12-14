import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {


    return (
        <div className="card mb-3 w-50">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={item[0].img} alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <h1 className="card-title">{item[0].name}</h1>
                        <p className="card-text">{item[0].description}</p>
                        <p className="card-text">{item[0].price}</p>
                        <ItemCount iniStock={1} maxStock={10}/>
                        <button className="btn mt-3">Comprar</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail;
