import React, { useState } from "react";
import { Button } from "semantic-ui-react";

const contStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const numStyles = {
  minWidth: "80px",
  fontSize: "20px",
  marginBottom: "0px"
};

const contadorStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: "20px"
};

const ItemCount = ({ stock, onAdd }) => {
  const [number, setNumber] = useState(1);

  const hundleIncrement = () => {
    //console.log("Hiciste click");
    if (number < stock) setNumber(number + 1);
  };

  const hundleDecrement = () => {
    //console.log("Hiciste click");
    if (number > 1) setNumber(number - 1);
  };

  return (
    <div className="ContadorContainer" style={contStyles}>

      {stock === 0 ? 
      (
        <span>SIN STOCK</span> 
      ):(
        <div>
          <div style={contadorStyles}>
            <Button size="small" onClick={hundleDecrement}>
              <p className="less-plus"> - </p>
            </Button>
            <p className="Contador" style={numStyles}>
              {number}
            </p>
            <Button size="small" onClick={hundleIncrement}>
              <p className="less-plus"> + </p>
            </Button>
          </div>
          <div>
            <Button onClick={() => onAdd(number)} content="Add to cart" icon="cart" size="big" color="yellow"/>
          </div>
        </div>
      )}

    </div>  
  )
}

export default ItemCount;
