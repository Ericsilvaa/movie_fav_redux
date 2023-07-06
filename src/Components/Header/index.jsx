import React from "react";
import styles from "./Header.module.css";

import { MdOutlineLocalMovies } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.bg_header}>
      <div className={`${styles.header} container`}>
        <div className={styles.home_logo}>
          <MdOutlineLocalMovies className={styles.logo} />
          <form>
            <label>
              {/* <BiSearch /> */}
              <input type="text" name="search" placeholder="Search" />
            </label>
          </form>
        </div>
        <div className={styles.home_login}>
          <span className={`${styles.subscribe} type_letter_secondary`}>
            <Link>Subscribe</Link>
          </span>
          <span className="type_letter_secondary">
            <Link>LOG IN</Link>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
