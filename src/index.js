import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { StateProvider } from './context/store';

ReactDOM.render(
  <StateProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateProvider>,
  document.getElementById('root')
);

