import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import cartReducer from './reducers/cart';
import {saveState, loadState} from "./utils/loadState";
import throttle from 'lodash/throttle'

const persistedState = loadState();

const store = createStore(cartReducer, persistedState);


store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
