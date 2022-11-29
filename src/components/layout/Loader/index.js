import React, { memo } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Loader = ({ isLoading }) => {
  if (isLoading)
    return (
      <div className="airbnb-lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  return null;
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
};

Loader.defaultProps = {
  isLoading: false,
};

export default memo(Loader);
