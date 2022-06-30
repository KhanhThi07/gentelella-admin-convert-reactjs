import React from "react";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import classNames from "classnames/bind";
import styles from "./defaultLayout.module.scss";

const cx = classNames.bind(styles);

export default function DefaultLayout() {
  return (
    <>
      <div className={cx("wrapper")}>
        <SideBar></SideBar>
        <div className={cx("container")}>
          <NavBar></NavBar>
        </div>
      </div>
    </>
  );
}
