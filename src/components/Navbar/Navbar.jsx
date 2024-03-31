import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Logo />
        <Search placeholder="Search a album of your choice" />
        <Button btnText="Give Feedback" />
      </nav>
    </>
  );
};

export default Navbar;
