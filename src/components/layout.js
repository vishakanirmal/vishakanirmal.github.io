import * as React from "react";
import '../styles/global.css';
import { useStaticQuery, graphql } from "gatsby";
import PasswordProtect from "/src/components/PasswordProtect";
import Header from "./header";

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const content = (
    <div>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer className="site-footer">
        © {new Date().getFullYear()} &middot; Designed + coded by Vishaka
      </footer>
    </div>
  );

  return content;
  

};

export default Layout;
