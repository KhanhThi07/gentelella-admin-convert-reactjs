import React from "react";
import classNames from "classnames/bind";
import styles from "./modal.module.scss";

const cx = classNames.bind(styles);

export default function Modal() {
  return (
    <div className={cx("modal-overlay")}>
      <div className={cx("modal")}>This is my new modal!</div>
    </div>
  );
}
