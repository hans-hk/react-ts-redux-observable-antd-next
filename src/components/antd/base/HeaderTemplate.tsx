import {Layout} from 'antd';
import React from 'react';
import styled from 'styled-components';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const {Header} = Layout;

const HeaderLogo = styled.div`
  width: 120px;
  height: 31px;
  background: #ebfbee;
  margin: 16px 24px 16px 0;
  float: left;
`;

type HeaderTemplateProps = {};

function HeaderTemplate() {
  return (
    <Header className="header">
      <HeaderLogo />
      <HeaderLeft />
      <HeaderRight />
    </Header>
  );
}

HeaderTemplate.defaultProps = {};

export default HeaderTemplate;
