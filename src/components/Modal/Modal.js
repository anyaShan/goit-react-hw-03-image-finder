// import PropTypes from 'prop-types';
import { Overlay, ModalImage } from './Modal.styled';

export const Modal = ({ other, largeImageLink, closeModal }) => {
  return (
    <Overlay onClick={closeModal}>
      <ModalImage>
        <img src={largeImageLink} alt={other} />
      </ModalImage>
    </Overlay>
  );
};

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };
