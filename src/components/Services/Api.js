const URL_API = `https://pixabay.com/api/`;
const PIXABAY_KEY = `key=29626479-30d098b137805aefe019417a9`;

export function apiQuery(nextQuery, page = 1) {
  return fetch(
    `${URL_API}?q=${nextQuery}&page=${page}&${PIXABAY_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(responce => {
    if (responce.ok) {
      return responce.json();
    }

    return Promise.reject(new Error('Enter a valid query'));
  });
}

// export default { fetchQuery };
