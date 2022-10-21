import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from 'components/App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchName: '',
  };

  // componentDidMount() {
  //   fetch(
  //     'https://pixabay.com/api/?q=cat&page=1&key=29626479-30d098b137805aefe019417a9&image_type=photo&orientation=horizontal&per_page=12'
  //   )
  //     .then(res => res.json())
  //     .then(image => this.setState({ image }));
  // }

  // Функція, що кидається у форму як prop для запису пошукового значення в state

  handleFormSubmit = searchValue => {
    const { searchName } = searchValue;
    this.setState({ searchName });
  };

  render() {
    return (
      <Container>
        <ToastContainer autoClose={3000} theme="dark" />
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery searchName={this.state.searchName} />
      </Container>
    );
  }
}
