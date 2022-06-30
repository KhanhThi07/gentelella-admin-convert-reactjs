import React from "react";
import classNames from "classnames/bind";
import styles from "./sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

export default function SideBarItem({
  className,
  icon,
  title,
  pathChildren,
  onClick,
}) {
  return (
    <li className={cx("sidebar-item", className)} onClick={onClick}>
      <div className={cx("sidebar-item__parent")}>
        <span>{icon}</span>
        <p>{title}</p>
        {pathChildren && (
          <FontAwesomeIcon
            icon={faChevronDown}
            className={cx("sidebar-item-chevron")}
          ></FontAwesomeIcon>
        )}
      </div>
      {pathChildren ? (
        <ul className={cx("sidebar-menu__child")}>
          {pathChildren.map((child, idx) => {
            return (
              <SideBarItem
                key={idx}
                className={cx("sidebar-item__child")}
                title={child.title}
              ></SideBarItem>
            );
          })}
        </ul>
      ) : null}
    </li>
  );
}
