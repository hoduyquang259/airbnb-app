import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import useAuth from "../../hooks/useAuth";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./styles.scss";

const SignInModal = ({ show, onHide }) => {
  const fieldIsRequired = "This field is required";

  const formSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required(fieldIsRequired),
    password: Yup.string()
      .required(fieldIsRequired)
      .min(3, "Password must be at 3 char long"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const { authSignIn, onPostAuthSignIn } = useAuth();

  const onSubmit = async (data) => {
    console.log(data);
    onPostAuthSignIn({
      formData: { email: data.email, password: data.password },
      setFocus(errorMessage) {
        reset();
        setFocus("email");
        alert(errorMessage);
      },
      callback() {
        alert("Tài khoản đã đăng nhập thành công");
        onHide();
        reset();
      },
    });
  };

  useEffect(() => {
    reset();
  }, [show]);

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        keyboard={false}
        className="AirbnbAuthenticationModal"
      >
        <Modal.Header closeButton>
          <Modal.Title>ĐĂNG NHẬP TÀI KHOẢN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Tài khoản (Email)</label>
            <input {...register("email")} className={errors.email && "error"} />
            {errors.email && <p>{errors.email.message}</p>}

            <label>Mật khẩu</label>
            <input
              name="password"
              type="password"
              {...register("password")}
              className={errors.password && "error"}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <div className="AirbnbAuthenticationModalControl">
              <Button type="submit">ĐĂNG NHẬP</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

SignInModal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
};

SignInModal.defaultProps = {
  show: false,
  onHide() {},
};

export default memo(SignInModal);
