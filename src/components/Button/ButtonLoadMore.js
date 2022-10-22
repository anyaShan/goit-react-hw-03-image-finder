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
