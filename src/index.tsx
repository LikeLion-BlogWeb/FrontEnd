// reactDOM
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // Context api를 이용해 App component에 전역상태 변수를 뿌려주게끔 함
  <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </AuthContextProvider>
);