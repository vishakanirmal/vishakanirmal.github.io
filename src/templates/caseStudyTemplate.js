import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import PasswordProtect from "/src/components/PasswordProtect"; // Import PasswordProtect component
import Header from "/src/components/header"; // Assuming you want to include the header

export default function CaseStudyTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { isPasswordProtected, password, blockquoteColor } = frontmatter;

  const content = (
    <div>
      <Header siteTitle="Vishaka Nirmal" />
      <div className="case-study-container">
        <div className="case-study-content-wrapper">
          <div className="case-study-content">
            <Link to="/work">← Back</Link>
            <div
              className="case-study-body"
              style={{ "--blockquote-color": blockquoteColor }} // Pass color as a CSS variable
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Link to="/work">← Back to all projects</Link>
          </div>
        </div>
      </div>
      <footer className="site-footer">
        © {new Date().getFullYear()} &middot; Designed + coded by Vishaka
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
        blockquoteColor # Fetch the color from frontmatter
      }
      tableOfContents
    }
  }
`;