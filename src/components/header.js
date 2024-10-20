import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="header">
    <Link to="/" activeClassName="active">Projects</Link>
    <Link to="/misc" activeClassName="active">Extras</Link>
    <Link to="/about" activeClassName="active">About</Link>
  </header>
)

export default Header