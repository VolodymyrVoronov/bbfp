import React from "react";

import Fade from "react-reveal/Fade";

import "./NothingFound.scss";

const NothingFound = React.memo((props) => {
  return (
    <Fade>
      <div className="nothing-found-container nothing-found">
        <h1 className="nothing-found__title">
          Nothing matches your search. Try to change the request.
        </h1>
        <div className="nothing-found__image"></div>
      </div>
    </Fade>
  );
});

export default NothingFound;
