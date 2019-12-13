import {Badge, Dropdown, Menu} from 'antd';
import {ClickParam} from 'antd/lib/menu';
import React, {useState} from 'react';
import styled from 'styled-components';

const Right = styled.div`
  float: right;
`;

type HeaderRightProps = {};

function HeaderRight() {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e: ClickParam) => {
    if (e.key === '3') {
      setVisible(false);
    }
  };

  const handleVisibleChange = () => {
    setVisible(!visible);
  };

  const rightMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1nd menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <Right>
      <Dropdown
        overlay={rightMenu}
        placement="bottomLeft"
        onVisibleChange={handleVisibleChange}
        visible={visible}
      >
        <a href="#">
          Tasks
          <Badge
            count={5}
            style={{
              marginLeft: '4px',
              backgroundColor: '#fff',
              color: '#999',
              boxShadow: '0 0 0 1px #d9d9d9 inset',
            }}
          />
        </a>
      </Dropdown>
    </Right>
  );
}

HeaderRight.defaultProps = {};

export default HeaderRight;
