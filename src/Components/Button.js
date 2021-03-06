import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #fff;
  padding: 18px 240px 15px;
  color: #111;
  border-radius: 4px;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  transition: box-shadow 0.3s;
  line-height: 1;
  white-space: nowrap;
  border: none;
  text-align: center;
  cursor: pointer;
  margin: 20px auto 60px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03), 0 1px 0 rgba(0, 0, 0, 0.05),
    0 1px 3px rgba(0, 0, 0, 0.1);
  transform: translateZ(0);
  transition: all 0.2s ease;
  &:hover,
  &:focus {
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.1);
    background-color: #fefefe;
    color: #05f;
  }
  &:disabled {
    cursor: not-allowed;
    color: #888;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03), 0 1px 0 rgba(0, 0, 0, 0.05),
      0 1px 3px rgba(0, 0, 0, 0.1);
  }
`;

export default ({ children, loading = false, ...props }) => {
  return (
    <Button disabled={loading} {...props}>
      {loading ? 'Loading...' : children}
    </Button>
  );
};
