import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";

export default props => {
  console.log("rrrrrrrrrrr", props);
  return (
    <div>
      <h1>test single advisory</h1>
      <Img
        fluid={
          props.data.markdownRemark.frontmatter.image.childImageSharp.fluid
        }
        style={{ width: "150px", height: "150px" }}
      />
    </div>
  );
};

export const query = graphql`
  {
    markdownRemark {
      frontmatter {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;
