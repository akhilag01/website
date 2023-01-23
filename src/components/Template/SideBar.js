import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Akhil Aggarwal</h2>
        <p><a href="mailto:akhilag01@gmail.com">akhilag01@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Akhil. I like building things.
        I call Cupertino, California home, but I am currently a CS + Business student at <a href="https://nyu.edu/">New York University (Stern, CAS &apos;24)</a>. Previously, I have been a software engineer for teams at
        at <a href="https://aws.com">Amazon (AWS)</a>
        , <a href="https://kunduz.com">Kunduz, </a>
        and , <a href="https://sidoti.com">Sidoti & Company</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Akhil Aggarwal <Link to="/">akhilagg.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
