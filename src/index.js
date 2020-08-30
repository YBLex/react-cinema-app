import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {createAPI} from './api.js';
import reducer from './redux/reducer.js';
import DataOperation from './redux/data/operation.js';
import UserOperation from './redux/user/operation.js';

import App from './components/app/app.jsx';

const onError = () => {
  console.error('AUTH ERROR');
  // store.dispatch(SHOW_ERROR_MODAL);
};

const api = createAPI(onError);

const data = {
  promoTitle: `The Grand Budapest Hotel`,
  promoGenre: `Drama`,
  promoYear: 2015,
};

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(UserOperation.checkAuthStatus());
store.dispatch(DataOperation.loadMovies());

ReactDOM.render(
    <Provider store={store}>
      <App
        promoTitle = {data.promoTitle}
        promoGenre = {data.promoGenre}
        promoYear = {data.promoYear}
      />
    </Provider>,
    document.getElementById(`root`)
);
