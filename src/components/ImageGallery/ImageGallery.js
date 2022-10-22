import { Component } from 'react';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { StartPhrase, ErrorPhrase } from 'components/Phrases/Phrases';
import { List } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    gallery: [],
    totalImages: null,
    page: 1,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchName;
    const nextQuery = this.props.searchName;

    // const { gallery, totalImages, page } = this.state;
    if (prevQuery !== nextQuery) {
      // console.log('add state');
      // console.log(prevProps.searchName);
      // console.log(this.props.searchName);

      this.setState({ status: 'pending' });

      fetch(
        `https://pixabay.com/api/?q=${nextQuery}&page=1&key=29626479-30d098b137805aefe019417a9&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(responce => {
          if (responce.ok) {
            return responce.json();
          }

          return Promise.reject(new Error('Enter a valid query'));
        })
        .then(({ hits, totalHits }) =>
          this.setState({
            gallery: hits,
            totalImages: totalHits,
            status: 'resolved',
          })
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { gallery, error, status } = this.state;

    // console.log(gallery);

    if (status === 'idle') {
      return <StartPhrase />;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <ErrorPhrase error={error.massage} />;
    }

    if (status === 'resolved') {
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
}

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };

// ========================= Render () до створення "машини станів" ====================================

// return (
//   <>
//     {loading && <Loader />}
//     {!searchName && <StartPhrase />}
//     {error && <ErrorPhrase error={error.massage} />}

//     {gallery && (
//       <List>
//         {gallery.map(({ id, largeImageURL, webformatURL, tags }) => (
//           <ImageGalleryItem
//             key={id}
//             webformatLink={webformatURL}
//             largeImageLink={largeImageURL}
//             other={tags}
//           />
//         ))}
//       </List>
//     )}
//   </>
// );
