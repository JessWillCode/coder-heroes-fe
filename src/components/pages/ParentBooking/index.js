import React, { useState } from 'react';
import ParentSidebar from '../ParentHome/ParentSidebar';
import Banner from '../../common/Banner';
import { Layout } from 'antd';
import ParentBookingContainer from './ParentBookingContainer';

function ParentBooking() {
  const { Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <ParentSidebar active="courses" />
      <Content>
        <Banner />
        <div>
          <ParentBookingContainer />
        </div>
      </Content>
    </Layout>
  );
}

export default ParentBooking;
