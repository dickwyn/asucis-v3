import { Link } from "gatsby";
import React from "react";
import logo from "../../images/gatsby-icon.png";
import Image from "./image";

const Header = () => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            height: "30px",
            width: "30px",
          }}
        >
          Gatsby Default
          <Image />
          <img src={logo} alt="logo" style={{ width: "200px" }} />
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
