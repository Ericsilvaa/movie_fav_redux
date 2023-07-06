import React, { useState } from "react";
import styles from "./Footer.module.css";

// uso como component
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

// const redesSociais = ['facebook', 'instagram', 'twitter', 'youtube']

const Footer = () => {
  // const [redeSocial, setRedeSocial] = useState(redesSociais)

  return (
    <footer className={styles.bg_footer}>
      <div className={styles.footer}>
        <div className={styles.redes_sociais}>
          <ul className={styles.redes_sociais_list}>
            <li>
              <AiFillFacebook />
            </li>
            <li>
              <AiOutlineInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <AiFillYoutube />
            </li>
          </ul>
        </div>
        <div className={styles.footer_politicas}>
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>

        <div className={styles.footer_description}>
          <p>2022 MovieFavorites by Eric Oliveira</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
