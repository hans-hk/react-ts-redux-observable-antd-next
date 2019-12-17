import {Icon, Layout, Menu} from 'antd';
import React from 'react';
import useHansbar from '../../../libs/hansbar/useHansbar';

const {SubMenu} = Menu;
const {Sider} = Layout;

type MainSideMenuProps = {
  children: React.ReactNode;
};

function MainSideMenu({children}: MainSideMenuProps) {
  const [value, setValue] = useHansbar();

  return (
    <Layout>
      <Sider
        theme="dark"
        width={200}
        style={{
          background: '#001529',
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{height: '100%', borderRight: 0}}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                subnav 1
              </span>
            }
          >
            <Menu.Item
              key="1"
              onClick={() => {
                setValue(100);
              }}
            >
              hansbar 100%
            </Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      {children}
    </Layout>
  );
}

MainSideMenu.defaultProps = {};

export default MainSideMenu;
