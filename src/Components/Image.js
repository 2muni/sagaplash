import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  grid-row: span ${props => props.grid};
`;

export default props => {
  return <Image {...props} />;
};
