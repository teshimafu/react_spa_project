import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// import App from './App';
import AuthComponent from './components/Auth';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <AuthComponent />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
