import React, { useState } from 'react'
import { Layout, Menu } from 'antd';

//components
import About from './About';
import Contact from './Contact';
import ProductSearch from '../components/ProductSearch';
import Warranty from './Warranty';

//images
import actionWheels from '../img/action_wheels.png';

//styles
import './styles.scss';

// constants
const { Header, Content, Footer } = Layout;

const ABOUT = 'actionwheels';
const CONTACT = 'contact';
const PRODUCTS = 'products';
const WARRANTY = 'warranty';
const RESOURCES = 'resources';

const PAGE_PATHS = Object.freeze({
  [ABOUT]: {
    path: `/${ABOUT}`,
    component: <About />
  },
  [CONTACT]: {
    path: `/${CONTACT}`,
    component: <Contact />
  },
  [PRODUCTS]: {
    path: `/${PRODUCTS}`,
    component: <ProductSearch />
  },
  [WARRANTY]: {
    path: `/${WARRANTY}`,
    component: <Warranty/>
  },
  [RESOURCES]: {
    path: `/${RESOURCES}`
  }
});

const ActionWheels = (props) => {
  const [selectedPage, setSelectedPage] = useState('actionwheels');

  const renderComponent = ({key}) => {
    setSelectedPage(key)
  };

  console.log("PAGE_PATHS[selectedPage]", PAGE_PATHS[selectedPage])

  return (
    <Layout theme="light">
      <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <img src={actionWheels} className="actionSiteLogo"/>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['actionwheels']} onSelect={({key}) => renderComponent({key})}>
          <Menu.Item key="actionwheels">About</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
          <Menu.Item key="products">Products</Menu.Item>
          <Menu.Item key="warranty">Warranty</Menu.Item>
          <Menu.Item key="resources">Resources</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout contentBox" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          {PAGE_PATHS[selectedPage]['component']}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>© Action Wheels</Footer>
    </Layout>
  )
};

export default ActionWheels;
