import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import combinedReducers from 'reducers/combinedReducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

function reduxStore(initialState) {

  const store = createStore(combinedReducers, initialState,
  composeWithDevTools(applyMiddleware(thunk)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/combinedReducers', () => {
      // We need to require for hot reloadign to work properly.
      const nextReducer = require('../reducers/combinedReducers');  // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default reduxStore;
