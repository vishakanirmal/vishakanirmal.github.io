import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="header">
    <a href="/#home" className="vishaka">
      Vishaka Nirmal
    </a>
    <Link to="/#projects" activeClassName="active">Case Studies</Link>
    <Link to="/#archive" activeClassName="active">Archive</Link>
    <Link to="/#about" activeClassName="active">About</Link>
  </header>
)

export default Header;