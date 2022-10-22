export function apiQuery(nextQuery, page = 1) {
  return fetch(
    `https://pixabay.com/api/?q=${nextQuery}&page=${page}&key=29626479-30d098b137805aefe019417a9&image_type=photo&orientation=horizontal&per_page=12`
  ).then(responce => {
    if (responce.ok) {
      return responce.json();
    }

    return Promise.reject(new Error('Enter a valid query'));
  });
}

// export default { fetchQuery };
