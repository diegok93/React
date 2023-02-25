import React from "react";
import Item from "./Item";

const ItemList = ({ array }) => {
  return (
      <div style={styles.container}>
          {array.map((element, i) =>
              <Item key={i} product={element} />
          )}

{/* {array.map((product) =>
              <Item key={product.id} product={product} />
          )} */}

      </div>
  )
}
export default ItemList;

const styles = {
  container:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  }
}