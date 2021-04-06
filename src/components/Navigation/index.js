import React from 'react';
import './styles.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Dropdown, Menu } from 'antd';
import CustomerService from '../../components/CustomerService/index.js';
import Brands from '../../components/Brands/index.js';
import ProductSearch from '../ProductSearch/index.js';
import Manuals from '../Manuals/index';

import disneyBanner from '../../img/disney_banner.jpg';
import talonBanner from '../../img/talon_banner.jpg';
import logo from '../../img/logo.png';
import actionWheels from '../../img/action_wheels.png';

import {
  MenuOutlined
} from '@ant-design/icons';

const Navigation = () => {

  const smallMenu = (
    <Menu>
      <Menu.Item key="customerService">
        <a href="#customerService">CUSTOMER SERVICE</a>
      </Menu.Item>
      <Menu.Item key="productSearch">
        <a href="#productSearch">SEARCH PRODUCTS</a>
      </Menu.Item>
      <Menu.Item key="productSearch">
        <a href="#selfHelpGuides">SELF HELP GUIDES</a>
      </Menu.Item>
      <Menu.Item key="productSearch">
        <a href="#brands">BRANDS</a>
      </Menu.Item>
    </Menu>
  );


  return (
    <div className="navigation">
      <Router>
        <div>
          <div className="nav-container">
            <div className="nav-logo">
              <Link to="/"><img src={logo} className="logo" /></Link>
              <Link to="/actionwheels"><img src={actionWheels} className="aw-logo" /></Link>
            </div>
            <div className="nav">
              <div className="customerServiceNumber">
                <span>Customer Service:</span> <a href="tel:1-866-424-0500">866-424-0500</a>
              </div>

              <ul className="nav-list">
                <li><a href="#customerService" className="effect-1">CUSTOMER SERVICE</a></li>
                <li><a href="#productSearch" className="effect-1">SEARCH PRODUCTS</a></li>
                <li><a href="#selfHelpGuides" className="effect-1">SELF HELP GUIDES</a></li>
                <li><a href="#brands" className="effect-1">BRANDS</a></li>
              </ul>
            </div>

            <div className="smallNav">
              <Dropdown overlay={smallMenu}>
                <a className="ant-dropdown-link">
                  <MenuOutlined className="hamburgerMenu" />
                </a>
              </Dropdown>
            </div>

          </div>

      <div className="banner-container">
          <img src={talonBanner} className="banner-img bannerLeft" />
          <img src={disneyBanner} className="banner-img bannerRight" />
      </div>

      <div className="wrapper">
        <div className="welcomeText">
          <p>
            Ballard Pacific designs, manufactures and sells high quality electric ride-on toys and bicycles.  We partner with the companies like Disney, Honda, Yamaha & Mercedes Benz to create kid-size versions of the cars, trucks and recreational vehicles that everyone loves.  Ballard uses ONLY the best components, motors and materials to make the safest riding toys sold in the USA.  Due to our company’s structure, Ballard controls the process from the design stage through manufacturing and final shipment, which ensures high quality at affordable prices.
          </p>
        </div>

        <div className="secondPanel panel" id="selfHelpGuides">
          <h2>Self Help Guides</h2>
          <h3 id="self-help-text">Select a product from one of the dropdown menus to view the guide.</h3>
          <Manuals />

        </div>

        <div className="thirdPanel panel" id="brands">
          <h2>Ballard Pacific & Action Wheels are proud to partner with the following brands:</h2>
          <Brands />
        </div>

        <div className="fourthPanel panel" id="customerService">
          <h2>Customer Service</h2>
          <CustomerService />
        </div>

        <div className="fifth panel" id="productSearch">
          <h2>Search Products</h2>
          <ProductSearch />
        </div>
      </div>
    </div>

  </Router>
      {/*<Footer>Ballard Pacific</Footer>*/}
</div>
  )
};

export default Navigation;


{/*<div className="overlay">*/}
  {/*<div className="icon-pair">*/}
    {/*<Link className="icon-text" to="/customer-service"> <CustomerServiceOutlined style={{ fontSize: '60px', color: 'black' }} className="icon" /> CUSTOMER SERVICE</Link>*/}
  {/*</div>*/}

  {/*<div className="icon-pair">*/}
    {/*<Link className="icon-text" to="/manuals"><FilePdfOutlined style={{ fontSize: '60px', color: 'black' }} className="icon" /> SELF HELP GUIDES</Link>*/}
  {/*</div>*/}

  {/*<div className="icon-pair">*/}
    {/*<Link className="icon-text" to="/brands"><TagsOutlined style={{ fontSize: '60px', color: 'black' }} className="icon" /> BRANDS</Link>*/}
  {/*</div>*/}
{/*</div>*/}