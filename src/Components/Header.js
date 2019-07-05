import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  font-size: 1.6rem;
  font-family: 'Pacifico';
  text-align: center;
  padding: 20px;
  color: #424242;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  background: #fff;
`;

export default () => {
  return <Header>Sagaplsh</Header>;
};
