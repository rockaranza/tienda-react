import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    
    useEffect(() => {

        setTimeout(()=>{getProduct()}, 3000)

    }, []);

    const getProduct = async () => {
        const getData = await fetch("../JSON/DataList.json");
        const dataResponse = await getData.json();
        console.log("Respueta asincrona", dataResponse)
        setItem(dataResponse);
    }

    return (
        <div className="container w-100 d-flex flex-column justify-content-center align-items-center ">
            <ItemDetail item={item} className="mt-5 "/>
        </div>
        
    )
}

export default ItemDetailContainer;
