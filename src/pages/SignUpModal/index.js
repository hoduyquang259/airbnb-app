import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import useAuth from "../../hooks/useAuth";
import Loader from "../../components/layout/Loader";

import "./styles.scss";

const SignUpModal = ({ show, onHide }) => {
  const { authSignUp, onPostAuthSignUp } = useAuth();

  const fieldIsRequired = "This field is required";

  const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

  const formSchema = Yup.object().shape({
    account: Yup.string().required(fieldIsRequired),
    password: Yup.string()
      .required(fieldIsRequired)
      .min(3, "Password must be at 3 char long"),
    confirmPwd: Yup.string()
      .required(fieldIsRequired)
      .oneOf([Yup.ref("password")], "Passwords does not match"),
    name: Yup.string().required(fieldIsRequired),
    email: Yup.string().email("Email is invalid").required(fieldIsRequired),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(fieldIsRequired),
  });

  const formOptions = { resolver: yupResolver(formSchema) };

  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = async (data) => {
    const dataUpdated = {
      name: data?.name,
      email: data?.email,
      password: data?.password,
      phone: data?.phone,
      birthday: "25/09/1992",
      gender: true,
    };

    onPostAuthSignUp({
      formData: dataUpdated,
      setFocus(errorMessage) {
        setFocus("email");
        alert(errorMessage);
      },
      callback() {
        alert("Tài khoản đã đăng ký thành công");
        reset();
      },
    });
  };

  useEffect(() => {
    reset();
  }, [show]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      className="AirbnbAuthenticationModal"
    >
      <Modal.Header closeButton>
        <Modal.Title>ĐĂNG KÝ TÀI KHOẢN</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Tài khoản</label>
          <input
            {...register("account")}
            className={errors.account && "error"}
          />
          {errors.account && <p>{errors.account.message}</p>}

          <label>Mật khẩu</label>
          <input
            name="password"
            type="password"
            {...register("password")}
            className={errors.password && "error"}
          />
          {errors.password && <p>{errors.password.message}</p>}

          <label>Xác nhận mật khẩu</label>
          <input
            name="confirmPwd"
            type="password"
            {...register("confirmPwd")}
            className={errors.confirmPwd && "error"}
          />
          {errors.confirmPwd && <p>{errors.confirmPwd.message}</p>}

          <label>Họ tên</label>
          <input {...register("name")} className={errors.name && "error"} />
          {errors.name && <p>{errors.name.message}</p>}

          <label>Email</label>
          <input {...register("email")} className={errors.email && "error"} />
          {errors.email && <p>{errors.email.message}</p>}

          <label>Số điện thoại</label>
          <input {...register("phone")} className={errors.phone && "error"} />
          {errors.phone && <p>{errors.phone.message}</p>}
          <div className="AirbnbAuthenticationModalControl">
            <Button type="submit">
              ĐĂNG KÝ
              <Loader isLoading={authSignUp.status === "loading"} />
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

SignUpModal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
};

SignUpModal.defaultProps = {
  show: false,
  onHide() {},
};

export default memo(SignUpModal);
