import React from "react";
import classNames from "classnames/bind";
import styles from "./notification.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

export default function Notification() {
  return (
    <div className={cx("menu")}>
      <ul className={cx("menu-list")}>
        <li className={cx("menu-item")}>
          <a className={cx("dropdown-item")}>
            <span className={cx("image")}>
              <img
                src={require("../../../../assets/img/avatar.jpg")}
                alt="Profile Image"
              />
            </span>
            <span>
              <span>John Smith</span>
              <span className={cx("time")}>3 mins ago</span>
            </span>
            <span className={cx("message")}>
              Film festivals used to be do-or-die moments for movie makers. They
              were where...
            </span>
          </a>
        </li>
        <li className={cx("menu-item")}>
          <a className={cx("dropdown-item")}>
            <span className={cx("image")}>
              <img
                src={require("../../../../assets/img/avatar.jpg")}
                alt="Profile Image"
              />
            </span>
            <span>
              <span>John Smith</span>
              <span className={cx("time")}>3 mins ago</span>
            </span>
            <span className={cx("message")}>
              Film festivals used to be do-or-die moments for movie makers. They
              were where...
            </span>
          </a>
        </li>
        <li className={cx("menu-item")}>
          <a className={cx("dropdown-item")}>
            <span className={cx("image")}>
              <img
                src={require("../../../../assets/img/avatar.jpg")}
                alt="Profile Image"
              />
            </span>
            <span>
              <span>John Smith</span>
              <span className={cx("time")}>3 mins ago</span>
            </span>
            <span className={cx("message")}>
              Film festivals used to be do-or-die moments for movie makers. They
              were where...
            </span>
          </a>
        </li>
        <li className={cx("menu-item")}>
          <a className={cx("dropdown-item")}>
            <span className={cx("image")}>
              <img
                src={require("../../../../assets/img/avatar.jpg")}
                alt="Profile Image"
              />
            </span>
            <span>
              <span>John Smith</span>
              <span className={cx("time")}>3 mins ago</span>
            </span>
            <span className={cx("message")}>
              Film festivals used to be do-or-die moments for movie makers. They
              were where...
            </span>
          </a>
        </li>
        <li className={cx("menu-item")}>
          <div className={cx("text-center")}>
            <a className="dropdown-item">
              <strong>See All Alerts</strong>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
