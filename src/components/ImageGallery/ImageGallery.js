import { Component } from 'react';
// import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    gallery: [],
    totalImages: null,
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    // const { gallery, totalImages, page } = this.state;
    if (prevProps.searchName !== this.props.searchName) {
      // console.log('add state');
      // console.log(prevProps.searchName);
      // console.log(this.props.searchName);

      fetch(
        `https://pixabay.com/api/?q=${this.props.searchName}&page=1&key=29626479-30d098b137805aefe019417a9&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(({ hits, totalHits }) =>
          this.setState({
            gallery: hits,
            totalImages: totalHits,
          })
        );
    }
  }
  render() {
    const { gallery } = this.state;
    console.log(gallery);

    return (
      <List>
        {gallery.map(({ id, largeImageURL, webformatURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatLink={webformatURL}
            largeImageLink={largeImageURL}
            other={tags}
          />
        ))}
      </List>
    );
  }
}

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };
