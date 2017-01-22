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

export function searchAsyncComplete(searchTerm, stock) {
  let isError = false;
  let error = null;
  if (!stock[searchTerm]) {
    isError = true;
    error = stock.null.error;
  }
  return {
    type: ACTIONS.SEARCH_COMPLETE,
    isError,
    error
  };
}

export function searchAsync(searchTerm) {  
  return (dispatch) => {
    dispatch(sharedActions.setRequestingStatus(true));
    let cleanSearchTerm;
    if (searchTerm) {
      cleanSearchTerm = searchTerm.toUpperCase();
    } else {
      return null;
    }
    return fetchJSON(`${config.apiHostUrl}/api/stocks?symbols=${cleanSearchTerm}`)
      .then((stock) => {
        // dispatch to inform of new data
        dispatch(searchAsyncComplete(cleanSearchTerm, stock));
        dispatch(stockActions.setActiveStock(cleanSearchTerm, stock));
        dispatch(sharedActions.setRequestingStatus(false));
      });
  };
}

export function clearSearch() {
  return {
    type: ACTIONS.SEARCH_CLEAR
  };
}


