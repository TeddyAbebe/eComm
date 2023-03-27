import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../Redux/actions";
import { productList } from "../Redux/productAction";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.log("Data in Main Componenet ", data);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div>
      <div className="main">
        <div>
          <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
        </div>
      </div>

      <div className="productContainer">
        {data.map((item) => (
          <div className="productItem">
            <div>
              <img src={item.photo} alt="" />
              <h2>Name : {item.name}</h2>
              <h3>Color : {item.color}</h3>
              <h4>Price : {item.price}</h4>
              <h4>Category : {item.category}</h4>
              <h4>Brand : {item.brand}</h4>
              <div>
                <button onClick={() => dispatch(addToCart(item))}>
                  Add to Cart
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove From Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
