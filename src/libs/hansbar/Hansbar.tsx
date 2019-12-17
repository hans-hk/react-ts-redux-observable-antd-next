import {delay} from 'lodash';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import HansbarContext from './HansbarContext';

const HansbarContainer = styled.div<{
  color?: string;
  height?: string;
  width: string;
  visible: boolean;
}>`
  position: fixed;
  top: 0;
  width: ${props => props.width};
  height: ${props => props.height};
  z-index: 9999;
  background: ${props => props.color};
  opacity: ${props => (props.visible ? '1' : '0')};
  transition: ${props => (props.visible ? 'all 0.4s ease-in' : 'none')};
`;

HansbarContainer.defaultProps = {
  color: '#63e6be',
  height: '4px',
  width: '0%',
  visible: true,
};

function Hansbar() {
  const hansbar = useContext(HansbarContext);
  const {value, setValue} = hansbar;
  const [visible, setVisible] = useState(false);

  const hide = useCallback(() => {
    setValue(0);
    setVisible(false);
  }, [setValue]);

  useEffect(() => {
    setVisible(true);

    if (value === 100) {
      delay(hide, 2000);
    }
  }, [hide, value]);

  return <HansbarContainer width={`${value}%`} visible={visible} />;
}

export default Hansbar;
