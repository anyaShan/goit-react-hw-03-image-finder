// import PropTypes from 'prop-types';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <SearchbarHeader>
      <SearchForm>
        <SearchFormButton type="submit">
          <SearchFormLabel>Search</SearchFormLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };
