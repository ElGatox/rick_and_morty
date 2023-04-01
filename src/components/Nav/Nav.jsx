import React from "react";
import SearchBar from "../SearchBar";
import Style from "./Nav.module.css"
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';


class Nav extends React.Component {
  constructor(props) {
  super(props)
}

render() {
  return (
    <div className={Style.Nav}>
      <SearchBar className={Style.SearchBar} onSearch={this.props.onSearch } />
       <Link to="/">LOGOUT</Link>
       <button>
          <Link to="/about"> About </Link>
       </button>
       <button>
          <Link to="/home"> Home </Link>
       </button>
    </div>
  )
}
}

export default Nav
