import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Modal from "react-modal";
import FavIcon from "./FavIcon";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    overflowY: "scroll",
  },
};

function Header({ siteTitle, siteDescription, siteUrl }) {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <HeaderWrapper className="header">
      {/* <FavIcon /> */}
      <Helmet>
        <html lang="en" amp />
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <link rel="canonical" href={siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@lewismenelaws" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={`${siteUrl}/twitter-card.png`} />
      </Helmet>
      <div>
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={customStyles}
          contentLabel="Disclaimer"
        >
          <button onClick={() => setModalOpen(false)}>close</button>
          <h1>What is BlackLivesMatter.dev</h1>
          <p>
            BlackLivesMatter.dev is a website for developers to showcase their
            support for the Black Lives Matter movement. It is an open source
            project to spread awareness for the #BlackLivesMatter movement.
            BlackLivesMatter.dev isn't officially affiliated with the official{" "}
            <a href="https://blacklivesmatter.com">#BlackLivesMatter</a>{" "}
            organization.
          </p>
          <h1>How can I help?</h1>
          <p>
            If you are looking to help with the #BlackLivesMatter foundation,
            You can donate to #BlackLivesMatter and spread the word on your
            social media. For help specifically with BlackLivesMatter.dev. You
            can visit us on Github for more information.
          </p>
          <h1>Can I insert my name on this site?</h1>
          <p>
            Yes you can. You can make a pull request for this github repository
            and insert your name. Please use whatever tag you feel fit, however,
            please note that your pull request will be reviewed before merging
            into the main code base.
          </p>
          <h1>How do I get to the top of the list?</h1>
          <p>
            All people are randomized in the build process. Meaning every time
            someone is added (or removed), the list is randomized again.
          </p>
          <h1>I have more questions that this doesn't answer</h1>
          <p>
            Understandable. Feel free to tweet me at{" "}
            <a href="https://twitter.com/LewisMenelaws">@Lewis Menelaws</a> or
            send me an{" "}
            <a href="mailto:hi@lewismenelaws.com">email by clicking here</a>.
          </p>
        </Modal>
        <h1 id="top">
          <Link to="/">BlackLivesMatter.dev</Link>
        </h1>
        <p>
          Website for showcasing developers who are helping support
          #BlackLivesMatter.{" "}
          <span
            onClick={() => setModalOpen(true)}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Please read before continuing.
          </span>
        </p>
      </div>
    </HeaderWrapper>
  );
}
Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  siteUrl: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
  siteDescription: "",
  siteUrl: "",
};

export default Header;

// Component Styles
const HeaderWrapper = styled.header`
  text-align: center;
  h1 {
    font-size: 6rem;
  }
  @media (max-width: 830px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
