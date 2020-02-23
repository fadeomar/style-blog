import React from "react";
import { graphql, Link } from "gatsby";
const Advisory = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  console.log(edges);
  return (
    <div>
      {edges.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter: { title, description }
          }
        }) => {
          console.log(description);
          return (
            <div key={id}>
              <h1>{title}</h1>
              <h2>{description}</h2>
              <Link to={slug}>Go to {title}</Link>
              <br />
              <br />
              <br />
            </div>
          );
        }
      )}
    </div>
  );
};

export const myQuery = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "advisory-post" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            description
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Advisory;
