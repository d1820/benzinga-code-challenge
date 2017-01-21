import { ACTIONS } from 'shared/const';


const initialState = {
  searchTerm: '',
  searchError: false,
  hasSearchError: false
};
export default function search(state = initialState, action) {

  switch (action.type) {
    case ACTIONS.SEARCH:
      return Object.assign({}, state, { searchTerm: action.searchTerm });
    case ACTIONS.SEARCH_CLEAR:
      return Object.assign({}, state, { searchTerm: null });
    case ACTIONS.SEARCHTERM_CHANGED:
      return Object.assign({}, state, { searchTerm: action.searchTerm });
    case ACTIONS.SEARCH_COMPLETE:
      return Object.assign({}, state, {
        hasSearchError: action.isError,
        searchError: action.error
      });
    default:
      return state;
  }
}
