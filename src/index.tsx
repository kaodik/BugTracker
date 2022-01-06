import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { Provider } from 'react-redux';
// import store from './redux/configureStore';
export const Index: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider>
        {/*store={store}> */}
        <App />
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
