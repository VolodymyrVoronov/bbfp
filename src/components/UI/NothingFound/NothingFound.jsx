import React from "react";

import "./NothingFound.scss";

const NothingFound = React.memo((props) => {
  return (
    <div className="nothing-found-container nothing-found">
      <h1 className="nothing-found__title">
        Nothing matches your search. Try to change the request.
      </h1>
      <div className="nothing-found__image"></div>
    </div>
  );
});

export default NothingFound;
