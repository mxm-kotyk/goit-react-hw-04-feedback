import {
  FaRegSmileBeam,
  FaRegGrinBeam,
  FaRegLaughSquint,
  FaRegMehBlank,
  FaRegMeh,
  FaRegGrimace,
  FaRegFrownOpen,
  FaRegFrown,
  FaRegSadTear,
} from 'react-icons/fa';
import { renderToString } from 'react-dom/server';
import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const buttonStyles = {
  good: {
    backgroundColor: '#10ac84',
    defaultIcon: <FaRegSmileBeam color="white" />,
    hoverIcon: <FaRegGrinBeam color="white" />,
    activeIcon: <FaRegLaughSquint color="white" />,
    boxShadowColor: '#1C9076',
  },
  bad: {
    backgroundColor: '#EE4444',
    defaultIcon: <FaRegFrownOpen color="white" />,
    hoverIcon: <FaRegFrown color="white" />,
    activeIcon: <FaRegSadTear color="white" />,
    boxShadowColor: '#ac453f',
  },
  neutral: {
    backgroundColor: '#1199EE',
    defaultIcon: <FaRegMehBlank color="white" />,
    hoverIcon: <FaRegMeh color="white" />,
    activeIcon: <FaRegGrimace color="white" />,
    boxShadowColor: '#2B74A3',
  },
};

export const Button = styled.button`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 25px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 44px;
  padding: 4px 10px 7px;
  display: inline-block;
  border: none;
  color: #fff;
  cursor: pointer;
  &:active {
    box-shadow: 0 0px 0 0 #5b1087, 0 3px 0 0 rgba(0, 0, 0, 0),
      0 4px 16px rgba(0, 0, 0, 0), 0 1px 2px 1px rgba(0, 0, 0, 0.5) inset,
      0 -18px 32px -2px rgba(255, 255, 255, 0.1) inset;
  }
  ${props => {
    const {
      backgroundColor,
      defaultIcon,
      hoverIcon,
      activeIcon,
      boxShadowColor,
    } = buttonStyles[props.title];
    return `
      background-color: ${backgroundColor};
      background-image: url('data:image/svg+xml,${encodeURIComponent(
        renderToString(defaultIcon)
      )}');
      &:hover {background-image: url('data:image/svg+xml,${encodeURIComponent(
        renderToString(hoverIcon)
      )}');};
      &:active {background-image: url('data:image/svg+xml,${encodeURIComponent(
        renderToString(activeIcon)
      )}');};
      box-shadow: 0 3px 0 0 ${boxShadowColor}, 0 4px 4px -1px rgba(0, 0, 0, 0.6), 0 4px 6px 1px rgba(0, 0, 0, 0.3), 0 1px 2px 1px rgba(0, 0, 0, 0) inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;
    `;
  }};
`;
