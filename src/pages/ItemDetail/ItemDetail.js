import React from 'react'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer.js';

import "./ItemDetail.css";

const cardStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
};

function ItemDetail({match}) {
    return (
        
        <div className="ItemDetail" style={cardStyles}>
            <ItemDetailContainer mtch={match}/>
        </div>
    )
}

export default ItemDetail
