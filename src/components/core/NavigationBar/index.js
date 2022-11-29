import React, { memo, useState } from "react";
import { Link } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { Dropdown } from "react-bootstrap";

import { HOME } from "../../../constants/breakCrumb";

import AirbnbLogo from "../../../assets/images/airbnb-logo.png";

import SignInModal from "../../../pages/SignInModal";

import "./styles.scss";
import SignUpModal from "../../../pages/SignUpModal";

const NavigationBar = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleOpenSignInModal = () => setShowSignInModal(true);

  const handleCloseSignInModal = () => setShowSignInModal(false);

  const handleOpenSignUpModal = () => {
    setShowSignUpModal(true);
  };

  const handleCloseSignUpModal = () => {
    setShowSignUpModal(false);
  };

  const handleSearch = () => {
    alert("search");
  };

  return (
    <div className="AirbnbNavigationBar">
      <Link to={HOME.id}>
        <img
          src={AirbnbLogo}
          style={{ height: "32px", with: "100px" }}
          alt="airbnb-logo"
        />
      </Link>
      <div className="AirbnbNavigationBarSearch" onClick={handleSearch}>
        <p>Địa điểm bất kỳ</p>
        <p>tuần bất kỳ</p>
        <p>Thêm khách</p>
        <FiSearch />
      </div>
      <Dropdown>
        <Dropdown.Toggle className="AirbnbNavigationBarUser">
          <HiOutlineBars3 />
          <FaUserCircle />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleOpenSignUpModal}>Đăng Ký</Dropdown.Item>
          <Dropdown.Item onClick={handleOpenSignInModal}>
            Đăng Nhập
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <SignInModal show={showSignInModal} onHide={handleCloseSignInModal} />
      <SignUpModal show={showSignUpModal} onHide={handleCloseSignUpModal} />
    </div>
  );
};

NavigationBar.propTypes = {};

export default memo(NavigationBar);
