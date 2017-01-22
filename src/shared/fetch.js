

function _checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function _parseJson(response) {
  return response.json();
}


export function fetchJSON(url, options) {
  const _options = {
    method: 'get',
    mode: 'cors',
    header: new Headers({
      'Content-Type': 'application/json'
    })
  };

  return fetch(url, Object.assign({}, _options, options))
    .then(_checkStatus)
    .then(_parseJson);
}
