import React, { useContext } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";

const Footer = () => {
  const { dark } = useContext(AuthContext);

  return (
    <footer
      className={`footer footer-center p-10 rounded ${
        dark
          ? "bg-slate-900 text-gray-200 border-t border-gray-700"
          : "bg-white text-gray-800"
      }`}
    >
      {/* Navigation Links */}
      <nav className="grid grid-flow-col gap-6 text-sm font-medium">
        <a
          href="#about"
          className="link link-hover hover:text-pink-800 transition"
        >
          About Us
        </a>
        <a
          href="#contact"
          className="link link-hover hover:text-pink-800 transition"
        >
          Contact
        </a>
        <a
          href="#popular"
          className="link link-hover hover:text-pink-800 transition"
        >
          Popular Games
        </a>
        <a
          href="#rated"
          className="link link-hover hover:text-pink-800 transition"
        >
          Highest Rated Games
        </a>
      </nav>

      {/* Social Icons */}
      <nav className="mt-4">
        <div className="grid grid-flow-col gap-6">
          <a
            href="https://web.facebook.com/marsel.CSE.PUST"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-800 transition"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://github.com/mahmudul35"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-800 transition"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/mahmudul-hasan-marsel-0369a61a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-800 transition"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </nav>

      {/* Copyright Section */}
      <aside className="mt-6">
        <p className="text-sm font-light">
          © {new Date().getFullYear()} - All rights reserved by{" "}
          <span className="font-semibold text-pink-800">Chill Gamer!</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
