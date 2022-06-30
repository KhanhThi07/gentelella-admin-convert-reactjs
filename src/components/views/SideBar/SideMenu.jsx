import React from "react";
import SideBarItem from "./SideBarItem";
import classNames from "classnames/bind";
import styles from "./sidebar.module.scss";

const cx = classNames.bind(styles);
export default function SideMenu({ data, onClick }) {
  return (
    <ul>
      {data.map((item, idx) => {
        return (
          <SideBarItem
            key={idx}
            title={item.title}
            icon={item.icon}
            pathChildren={item.children}
            onClick={onClick}
          ></SideBarItem>
        );
      })}
    </ul>
  );
}
