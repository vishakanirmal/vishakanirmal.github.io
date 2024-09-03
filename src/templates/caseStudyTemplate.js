import React from "react";
import { graphql } from "gatsby";
import PasswordProtect from "/src/components/PasswordProtect"; // Import PasswordProtect component
import Header from "/src/components/header"; // Assuming you want to include the header

export default function CaseStudyTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html, tableOfContents } = markdownRemark;
  const { isPasswordProtected, password } = frontmatter;

  const content = (
    <div>
      <Header siteTitle="Vishaka Nirmal"/>
      <div className="case-study-container">
        <aside className="case-study-toc">
          <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
        </aside>
        <div className="case-study-content-wrapper"> 
          <div className="case-study-content">
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
      <footer className="site-footer">
        © {new Date().getFullYear()} &middot; Built by Vishaka
      </footer>
    </div>
  );

  return isPasswordProtected ? (
    <PasswordProtect password={password}>{content}</PasswordProtect>
  ) : (
    content
  );
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        isPasswordProtected
        password
      }
      tableOfContents
    }
  }
`;

