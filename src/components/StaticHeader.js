import React from 'react';
import appLogo from './appLogo.png';
import './StaticHeader.css';

const StaticHeader = () => (
  <section className="header">
    <img className="header-img" src={appLogo} alt="appLogo" />
  </section>
);

export default StaticHeader;
