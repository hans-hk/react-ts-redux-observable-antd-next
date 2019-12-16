import {Layout} from 'antd';
import Link from 'next/link';
import React from 'react';
import HeaderTemplate from '../components/antd/base/HeaderTemplate';
import MainTemplate from '../components/antd/base/MainTemplate';
import {HansbarProvider} from '../libs/hansbar/HansbarContext';

type aboutProps = {};

function about() {
  return (
    <HansbarProvider>
      <Layout>
        <HeaderTemplate />
        <MainTemplate />
      </Layout>
    </HansbarProvider>
  );
}

about.defaultProps = {};

export default about;
