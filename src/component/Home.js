import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to="/Toggle">
        <button>Toggle</button>
      </Link>
      <Link to="/Modal">
        <button>Modal</button>
      </Link>
      <Link to="/AddTags">
        <button>AddTags</button>
      </Link>
    </>
  );
}

export default Home;