import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="header">
    <Link to="/" activeClassName="active">Work</Link>
    <Link to="/misc" activeClassName="active">Archive</Link>
    <Link to="/about" activeClassName="active">About</Link>
  </header>
)

export default Header