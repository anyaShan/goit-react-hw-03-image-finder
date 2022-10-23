import { Component } from 'react';
import { apiQuery } from '../Services/Api';
import { toast } from 'react-toastify';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { StartPhrase, ErrorPhrase } from 'components/Phrases/Phrases';
import { ButtonLoadMore } from 'components/Button/ButtonLoadMore';
import { List } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    gallery: [],
    totalImages: null,
    page: 1,
    perPage: 12,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchName;
    const nextQuery = this.props.searchName;

    if (prevQuery !== nextQuery) {
      // console.log('add state');
      // console.log(prevProps.searchName);
      // console.log(this.props.searchName);

      this.setState({ status: 'pending' });

      apiQuery(nextQuery)
        .then(respons => {
          // console.log(respons);
          const { data } = respons;
          const { hits, totalHits } = data;

          if (hits.length === 0) {
            this.setState({ status: 'idle' });
            return toast.error('You enter invalid search request');
          }

          this.setState({
            gallery: [...hits],
            totalImages: totalHits,
            page: 2,
            status: 'resolved',
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  loadMore = () => {
    apiQuery(this.props.searchName, this.state.page)
      .then(respons => {
        const { data } = respons;
        const { hits, totalHits } = data;

        if (hits.length <= totalHits) {
          toast.info(
            "We're sorry, but you'failureve reached the end of search results."
          );
        }

        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
          status: 'resolved',
        }));
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  render() {
    const { gallery, totalImages, error, page, perPage, status } = this.state;

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
        <>
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

          {totalImages >= perPage * page && (
            <ButtonLoadMore loadMore={this.loadMore} />
          )}
        </>
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
