import {Layout} from 'antd';
import React from 'react';
import HeaderTemplate from '../components/antd/base/HeaderTemplate';
import MainTemplate from '../components/antd/base/MainTemplate';

type MainPageProps = {};

function MainPage() {
  return (
    <Layout>
      <HeaderTemplate />
      <MainTemplate />
    </Layout>
  );
}

MainPage.defaultProps = {};

export default MainPage;
