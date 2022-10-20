// import { Component } from 'react';
import { Container } from 'components/App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export const App = () => {
  return (
    <Container>
      <Searchbar />
      <ImageGallery />
    </Container>
  );
};
