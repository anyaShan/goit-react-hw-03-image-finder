// import PropTypes from 'prop-types';
import { Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ other, webformatLink, largeImageLink }) => {
  return (
    <Item>
      <img src={webformatLink} alt={other} />
    </Item>
  );
};

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };
