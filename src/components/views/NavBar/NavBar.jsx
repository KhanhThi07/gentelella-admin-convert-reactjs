import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// import Tippy from "@tippyjs/react";
import Tippy from "@tippyjs/react/headless";
import Menu from "../Popper/Menu/Menu";
import Notification from "../Popper/Notification/Notification";
import classNames from "classnames/bind";
import styles from "./navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { hideSidebar, showSidebar } from "../../../redux/actions/sidebarAction";

const cx = classNames.bind(styles);
export default function NavBar() {
  const dispatch = useDispatch();
  const toggleSidebar = useSelector((state) => state.sidebarToggle.classes);

  const [sidebarToggle, setSidebarToggle] = useState();

  useEffect(() => {
    setSidebarToggle(toggleSidebar);
  }, [toggleSidebar]);

  const handleClick = () => {
    if (sidebarToggle === "") {
      dispatch(showSidebar("open"));
    }
    if (sidebarToggle === "open") {
      dispatch(hideSidebar(""));
    }
  };
  return (
    <div className={cx("navbar")}>
      <div>
        <button className={cx("navbar-toggle")} onClick={handleClick}>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
      </div>
      <div className={cx("navbar-menu")}>
        <ul>
          <li>
            <Tippy
              trigger="click"
              offset={[-5, -5]}
              interactive
              placement="top"
              render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                  <Notification></Notification>
                </div>
              )}
            >
              <div className={cx("navbar-item")}>
                <button>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  <span>6</span>
                </button>
              </div>
            </Tippy>
          </li>
          <li>
            <Tippy
              trigger="click"
              offset={[-5, -5]}
              interactive
              placement="top"
              render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                  <Menu></Menu>
                </div>
              )}
            >
              <div className={cx("navbar-item")}>
                <img src={require("../../../assets/img/avatar.jpg")} alt="" />
                <p>John Doe</p>
                <button>
                  <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                </button>
              </div>
            </Tippy>
          </li>
        </ul>
      </div>
    </div>
  );
}
