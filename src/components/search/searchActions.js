import { ACTIONS } from 'shared/const';
import { fetchJSON } from 'shared/fetch';
import { setActiveStock } from '../stocks/stockActions';
import { setRequestingStatus } from 'shared/sharedActions';

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
    dispatch(setRequestingStatus(true));
    let cleanSearchTerm;
    if (searchTerm) {
      cleanSearchTerm = searchTerm.toUpperCase();
    } else {
      return null;
    }
    return fetchJSON(`/api/?symbols=${cleanSearchTerm}`)
      .then((stock) => {
        console.log(stock);
        // dispatch to inform of new data
        dispatch(searchAsyncComplete(cleanSearchTerm, stock));
        dispatch(setActiveStock(cleanSearchTerm, stock));
        dispatch(setRequestingStatus(false));
      });
  };
}

export function clearSearch() {
  return {
    type: ACTIONS.SEARCH_CLEAR
  };
}


