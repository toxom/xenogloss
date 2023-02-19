import React from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <a href="/#">Profile</a>
        <a href="/#">Test</a>
        <button>
          <FaTimes/>
        </button>
      </nav>
      <button>
        <FaBars/>
      </button>
    </header>
  );
}