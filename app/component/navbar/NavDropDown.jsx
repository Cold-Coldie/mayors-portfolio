import React, { useEffect } from "react";
import styles from "./NavDropDown.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const routes = [
  { label: "Home", link: "/" },
  { label: "Projects", link: "/projects" },
  // { label: "Contact", link: "/contact" },
  { label: "About", link: "/about" },
];

const NavDropDown = ({ menuOpen, setMenuOpen }) => {
  const pathname = usePathname();

  // Inside your component
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when the component unmounts or menuOpen changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <div className={styles.backdrop} onClick={() => setMenuOpen(false)}></div>
      <div className={styles.dropdown}>
        {routes?.map((item, index) => (
          <div
            key={index}
            className={
              pathname == item?.link
                ? styles.activeRoute
                : styles.individualRoute
            }
          >
            <Link href={item?.link} onClick={() => setMenuOpen(false)}>
              {item?.label}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavDropDown;
