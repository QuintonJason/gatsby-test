import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

// FONTS
import '../assets/fonts/Panton-Light.otf'
import '../assets/fonts/Panton-Regular.otf'
import '../assets/fonts/Panton-SemiBold.otf'

import Header from "../components/Header";
import Footer from "../components/Footer";

// favicons
// import favicon16 from '../images/favicon-16x16.png'
// import favicon32 from '../images/favicon-32x32.png'
// import faviconApple from '../images/apple-touch-icon.png'

// images
// import FacebookIcon from '../images/Facebook'
// import CodepenIcon from '../images/Codepen'
// import GithubIcon from '../images/Github'
// import TwitterIcon from '../images/Twitter'
// import LinkedInIcon from '../images/LinkedIn'

// require("../css/prismjs.scss");

import "../assets/css/styles.scss";

const TemplateWrapper = ({ children }) => (
  <div
    className="hey"
    style={{
      display: "grid",
      height: "100vh",
      display: "grid",
      gridTemplateRows: "auto 1fr auto"

      // grid-template-columns: 1fr;
    }}
  >
    <Helmet
      title="quintonjason.com"
      meta={[
        { name: "description", content: "My portfolio site" },
        { property: "og:locale", content: "en-US" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Quinton Jason" },
        { property: "og:description", content: "My portfolio site" }
      ]}
    >
      {/*<link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
    <link rel="manifest" href="../../manifest.json" /> */}
      <meta name="theme-color" content="#00c200" />
    </Helmet>
    <Header />
    <main className="l-main"
    >
      {children()}
    </main>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node
};

export default TemplateWrapper;
