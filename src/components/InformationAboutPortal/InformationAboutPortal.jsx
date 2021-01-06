import React from "react";

import "./InformationAboutPortal.scss";

const InformationAboutPortal = (props) => {
  return (
    <div className="information-container">
      <h1 className="information-container__title title">
        <span className="title__highlighted-one">Br</span>eaking&nbsp;
        <span className="title__highlighted-two">Ba</span>d Fan&nbsp;
        <span className="title__highlighted-three">Po</span>rtal
      </h1>
      <p className="information-container__text">
        <span className="information-container__text--highlighted">Story</span>:
        "A high school chemistry teacher diagnosed with inoperable lung cancer
        turns to manufacturing and selling methamphetamine in order to secure
        his family's future."
      </p>
      <p className="information-container__text">
        Here you can find information about characters, also episodes and
        quotes. Also you can search some character by name and get some short
        summary about the character.
      </p>
      <p className="information-container__text">
        Just click on menu buttons above to start.
      </p>
    </div>
  );
};

export default InformationAboutPortal;
