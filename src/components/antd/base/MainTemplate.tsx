import React from 'react';
import MainContent from './MainContent';
import MainSideMenu from './MainSideMenu';

type MainTemplateProps = {};

function MainTemplate() {
  return (
    <MainSideMenu>
      <MainContent />
    </MainSideMenu>
  );
}

MainTemplate.defaultProps = {};

export default MainTemplate;
