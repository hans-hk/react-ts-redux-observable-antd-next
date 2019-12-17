import {Dropdown, Icon, Input, Menu} from 'antd';
import {ClickParam} from 'antd/lib/menu';
import React, {useState} from 'react';
import styled from 'styled-components';

const {Search} = Input;

const Left = styled.div`
  float: left;
`;

type HeaderLeftProps = {};

function HeaderLeft() {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e: ClickParam) => {
    if (e.key === '3') {
      setVisible(false);
    }
  };

  const handleVisibleChange = () => {
    setVisible(!visible);
  };

  const handleSearch = () => {};

  const leftMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Search placeholder="input search text" onSearch={handleSearch} size="large" />
      </Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <Left>
      <Dropdown
        overlay={leftMenu}
        placement="bottomLeft"
        onVisibleChange={handleVisibleChange}
        visible={visible}
      >
        <a href="#">
          Account <Icon type="down" />
        </a>
      </Dropdown>
    </Left>
  );
}

HeaderLeft.defaultProps = {};

export default HeaderLeft;
