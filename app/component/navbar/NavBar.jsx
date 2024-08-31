"use client";

import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavDropDown from "./NavDropDown";

const routes = [
  { label: "Home", link: "/" },
  { label: "Projects", link: "/projects" },
  // { label: "Contact", link: "/contact" },
  { label: "About", link: "/about" },
];

const NavBar = () => {
  const pathname = usePathname();

  const [screenWidth, setScreenWidth] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    screenWidth === null && setScreenWidth(window.innerWidth);

    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {" "}
      <nav className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href={"/"}>
            M
            <span>
              <Image
                src={"/static/icons/A-Chart.svg"}
                alt="Chart Icon"
                width={"30"}
                height={"30"}
              />
            </span>
            YOR
          </Link>
        </div>

        {screenWidth > 768 ? (
          <div className={styles.routesWrapper}>
            {routes?.map((item, index) => (
              <div
                key={index}
                className={
                  pathname == item?.link
                    ? styles.activeRoute
                    : styles.individualRoute
                }
              >
                <Link href={item?.link}>{item?.label}</Link>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.routesWrapper}>
            <Image
              src={
                menuOpen ? "/static/icons/cancel.svg" : "/static/icons/menu.svg"
              }
              width={"35"}
              height={"35"}
              className={styles.menuIcon}
              alt="Menu Icon"
              onClick={() => {
                setMenuOpen((s) => !s);
              }}
            />
          </div>
        )}
      </nav>
      {screenWidth <= 768 && menuOpen && (
        <NavDropDown menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}
    </>
  );
};

export default NavBar;
