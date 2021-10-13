export function fetchAPI(url, path, options) {
  const requestUrl = path ? `${url}/${path}` : url;
  return fetch(requestUrl, options)
    .then((response) => response.json())
    .then((data) => data);
}
