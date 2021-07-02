import React from 'react'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer.js';

const cardStyles = {
  margin: "40px 400px 60px 400px",
};

function ItemDetail({match}) {
    return (
        <div className="ItemDetail" style={cardStyles}>
            <ItemDetailContainer mtch={match}/>
        </div>
    )
}

export default ItemDetail
