import React from "react";

import "./WarningPage.scss";

export const WarningPage = (props) => {
  return (
    <div className="warning-page-container">
      <h1 className="warning-page-container__title">
        Please open this website on a desktop/laptop.
      </h1>
      <p className="warning-page-container__text">
        Thanks for your comprehension.
      </p>
    </div>
  );
};
