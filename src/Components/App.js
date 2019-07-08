/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import action from '../Actions';
import Header from './Header';
import Image from './Image';
import Button from './Button';
import GlobalStyles from '../Styles/GlobalStyles';

const App = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 25px;
  grid-gap: 25px;
  grid-auto-flow: dense;
  align-items: stretch;
  width: 100%;
`;

export default () => {
  const dispatch = useDispatch();
  const loadImages = () => dispatch(action.fetchImages.request());
  useEffect(() => {
    loadImages();
  }, []);
  const images = useSelector(({ images }) => images);
  return (
    <>
      <GlobalStyles />

      <Header />
      <App>
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
        <Button
          onClick={() => images.status !== 'pending' && loadImages()}
          loading={images.status === 'pending'}>
          Load More
        </Button>
      </App>
    </>
  );
};
