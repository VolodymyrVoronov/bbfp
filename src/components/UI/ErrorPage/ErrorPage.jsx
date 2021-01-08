import React from "react";

import gifErrorPage from "../../../assets/images-error-page/gif-1.gif";

import "./ErrorPage.scss";

const ErrorPage = (props) => {
  return (
    <div className="error-page-container">
      <h1 className="error-page-container__title">Something has gone wrong.</h1>
      <img
        className="error-page-container__image"
        src={gifErrorPage}
        alt="error gif"
      />
      <p className="error-page-container__text">
        Refresh the page and try again.
      </p>
    </div>
  );
};

export default ErrorPage;
