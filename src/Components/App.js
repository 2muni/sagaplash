/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import action from '../Actions';
import Header from './Header';
import Image from './Image';
import GlobalStyles from '../Styles/GlobalStyles';

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
  const { fetchImages } = action;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImages.request());
  }, []);
  const images = useSelector(({ images }) => images);
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header />
        <ImageWrapper>
          {Array.isArray(images.data) &&
            images.data.map(image => (
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
