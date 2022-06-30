import React from "react";
import classNames from "classnames/bind";
import styles from "./menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

export default function Menu() {
  return (
    <div className={cx("menu")}>
      <ul className={cx("menu-list")}>
        <li className={cx("menu-item")}>
          <a href="#">Profile</a>
        </li>
        <li className={cx("menu-item")}>
          <a href="#">Setting</a>
          <span className={cx("pull")}>50%</span>
        </li>
        <li className={cx("menu-item")}>
          <a href="#">Help</a>
        </li>
        <li className={cx("menu-item")}>
          <Link to="/login">Logout</Link>
          <FontAwesomeIcon
            icon={faArrowRightToBracket}
            className={cx("logout")}
          ></FontAwesomeIcon>
        </li>
      </ul>
    </div>
  );
}
