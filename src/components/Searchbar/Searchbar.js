// import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
// import * as yup from 'yup';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.styled';

// let schema = yup.object().shape({
//   name: yup.string().required(),
//   number: yup.number().required(),
// });

export const Searchbar = ({ onSubmit }) => {
  const handleFormSubmit = (values, { resetForm }) => {
    console.log(values);
    if (values.searchName.trim() === '') {
      return alert('Please, add word');
    }
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        searchName: '',
      }}
      // validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <SearchbarHeader>
        <SearchForm>
          <SearchFormButton type="submit">
            <SearchFormLabel>Search</SearchFormLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="searchName"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
          <ErrorMessage component="span" name="searchName" />
        </SearchForm>
      </SearchbarHeader>
    </Formik>
  );
};

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };
