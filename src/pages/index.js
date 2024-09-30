import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to my Gatsby site!">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Black and white cat, with black and white cow patterned hat"
        src="../images/Bucket-Hat-Cat.png"
      />
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />;

// Step 3: Export your component
export default IndexPage;
