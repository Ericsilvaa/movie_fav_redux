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
          <Link to={"/"}>
            <MdOutlineLocalMovies className={styles.logo} />
          </Link>
          {/* <form>
            <label> */}
              {/* <BiSearch /> */}
              {/* <input type="text" name="search" placeholder="Search" />
            </label>
          </form> */}
        </div>
        <div className={styles.home_login}>
          <Link to={'filmes/favoritos'}>
            <span className={`${styles.subscribe}`}>
              Meus Filmes
            </span>
          </Link>
          {/* <span className="type_letter_secondary">
            <Link>LOG IN</Link>
          </span> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
