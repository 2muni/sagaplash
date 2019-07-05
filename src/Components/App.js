/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Image from './Image';
import GlobalStyles from '../Styles/GlobalStyles';
import { useAxios } from '../API';

const IMAGE_COUNT = 28;

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 1200px;
  margin: 20px auto;
  padding: 25px;
  grid-gap: 25px;
  grid-auto-flow: dense;
  align-items: stretch;
`;

export default () => {
  const [imgStatus, setImgStatus] = useAxios({
    url: `${process.env.REACT_APP_API}&per_page=${IMAGE_COUNT}`,
  });

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header />
        <ImageWrapper>
          {Array.isArray(imgStatus.data) &&
            imgStatus.data.map(image => (
              <Image
                key={image.id}
                src={image.urls.small}
                alt={image.user.username}
                grid={Math.ceil(image.height / image.width)}
              />
            ))}
        </ImageWrapper>
      </div>
    </>
  );
};
