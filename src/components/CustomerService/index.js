import React from 'react';
import DropDown from '../../components/Dropdown/index.js';
import { models } from '../../utilities/models.js';
import { Link } from "react-router-dom";
import { SHOP_BASE_URL } from '../../utilities/constants';
import Demo from '../Form/index.js';
import './styles.scss';

const CustomerService = () => {
  return (
    <div className="customerService">
      <h3><a href="http://customerfirstservice.com/" target="new">Customer First Service</a>: <a href="tel:1-866-424-0500">866-424-0500</a></h3>

      <br/><br/>
      <h4>Contact us. We'd love to hear from you.</h4>
      <br/>
      <div className="contact-form">
        <Demo />
      </div>

    </div>
  )
};

export default CustomerService;

{/*<h3>Looking for a specific part? We can help.</h3>*/}
{/*<DropDown options={models} label="Select Product" baseUrl={SHOP_BASE_URL}/>*/}

{/*<h3>*/}
  {/*<DropDown options={models} label="Select product to view manual"/>
{/*</h3>*/}

{/*<h3>*/}
{/*<DropDown options={models} label="Search for parts"/>*/}
  {/*</h3>*/}

  {/*<h3>*/}
  {/*<a href="https://www.youtube.com/user/customerfirstservice" target="new"><span className="youtube-icon"/> Instructional Videos</a>*/}
{/*</h3>*/}