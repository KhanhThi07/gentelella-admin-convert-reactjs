import React from "react";
import classNames from "classnames/bind";
import styles from "./auth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
export default function login() {
  return (
    <div className={cx("wrapper")}>
      <form className={cx("form")}>
        <h1 className={cx("form-title")}>Login Form</h1>
        <div>
          <input
            type="text"
            placeholder="UserName"
            className={cx("form-control")}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            className={cx("form-control")}
            required
          />
        </div>
        <div className={cx("form-action")}>
          <Link
            to="/gentelella-admin-convert-reactjs"
            className={cx("form-btn", "form-btn__signin")}
          >
            Login
          </Link>
          <p>Lost your password?</p>
        </div>
        <div className={cx("form-separator")}>
          <div className={cx("form-change-link")}>
            New to side?
            <Link to={"/register"}>Create Account</Link>
          </div>
        </div>
        <div className={cx("form-info")}>
          <h1 className={cx("form-branch")}>
            <FontAwesomeIcon icon={faPaw}></FontAwesomeIcon>
            Gentelella Alela!
          </h1>
          <p className={cx("form-desc")}>
            ©2016 All Rights Reserved. Gentelella Alela! is a Bootstrap 3
            template. Privacy and Terms
          </p>
        </div>
      </form>
    </div>
  );
}
