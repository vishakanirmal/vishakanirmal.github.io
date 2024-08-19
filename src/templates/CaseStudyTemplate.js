import React from "react";
import { graphql } from "gatsby";
import Header from "/src/components/header"; // Assuming you want to include the header

export default function CaseStudyTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html, tableOfContents } = markdownRemark;

  return (
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
    </div>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      tableOfContents
    }
  }
`;
