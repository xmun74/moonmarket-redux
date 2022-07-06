import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Nav() {
  //   const state = useSelector((state) => state.itemReducer);

  return (
    <div>
      <span id="title">Market</span>
      <div>
        <Link to="/">상품리스트</Link>
        <Link to="/cart">장바구니</Link>
      </div>
    </div>
  );
}

export default Nav;
