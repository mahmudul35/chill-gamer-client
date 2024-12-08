import React, { useContext } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";
const Footer = () => {
  const { dark } = useContext(AuthContext);
  return (
    <footer className="footer footer-center  text-base-content rounded p-10 dark:bg-slate-900 dark:text-gray-200 dark:border-t">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div class="grid grid-flow-col gap-4">
          <a href="https://web.facebook.com/marsel.CSE.PUST" target="_blank">
            <FaFacebook size={30} />
          </a>
          <a href="https://github.com/mahmudul35" target="_blank">
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/mahmudul-hasan-marsel-0369a61a8/"
            target="_blank"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
