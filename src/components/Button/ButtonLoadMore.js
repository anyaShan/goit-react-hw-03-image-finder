import PropTypes from 'prop-types';

import { ButtonWrap } from './ButtonLoadMore.styled';

export const ButtonLoadMore = ({ loadMore }) => {
  return (
    <ButtonWrap>
      <button type="button" onClick={loadMore}>
        Load more
      </button>
    </ButtonWrap>
  );
};

ButtonLoadMore.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
