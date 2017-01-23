import { ACTIONS } from 'shared/const';
import { fetchJSON } from 'shared/fetch';
import config from 'config';
import { stockActions, sharedActions } from 'actions';

export function searchTermChanged(value) {
  return {
    type: ACTIONS.SEARCHTERM_CHANGED,
    searchTerm: value,
  };
}

export function searchAsyncComplete(searchTerm, stock, requestError) {
  let isError = false;
  let error = null;
  if (stock && !stock[searchTerm]) {
    isError = true;
    error = stock.null.error;
  } else if (requestError) {
    isError = true;
    error = requestError;
  }
  return {
    type: ACTIONS.SEARCH_COMPLETE,
    isError,
    error
  };
}

export function searchAsync(searchTerm) {
  const configlocal = config;
  return (dispatch) => {
    dispatch(sharedActions.setRequestingStatus(true));
    let cleanSearchTerm;
    if (searchTerm) {
      cleanSearchTerm = searchTerm.toUpperCase();
    } else {
      return null;
    }
    const url = `${configlocal.apiHostUrl}/api/stocks?symbol=${cleanSearchTerm}`;
    return fetchJSON(url)
      .then((stock) => {
        // dispatch to inform of new data
        dispatch(searchAsyncComplete(cleanSearchTerm, stock, null));
        dispatch(stockActions.setActiveStock(cleanSearchTerm, stock));
        dispatch(sharedActions.setRequestingStatus(false));
      }).catch((ex) => {
        dispatch(searchAsyncComplete(cleanSearchTerm, null, `Search Request Failed: ${ex.message}`));
      });
  };
}

export function clearSearch() {
  return {
    type: ACTIONS.SEARCH_CLEAR
  };
}


