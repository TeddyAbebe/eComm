import React from "react";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../Redux/productAction";

function Header() {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  console.log("data in header", result);
  return (
    <div className="header">
      <Link to="/">
        <div className="home">
          <HomeIcon sx={{ fontSize: 45 }} />
        </div>
      </Link>

      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => dispatch(productSearch(event.target.value))}
        ></input>
        <button>
          <SearchIcon />
        </button>
      </div>

      <Link to="/cart">
        <div className="cart">
          <span>
            <b>{result.length}</b>
          </span>
          <div>
            <ShoppingCartRoundedIcon sx={{ fontSize: 35 }} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
