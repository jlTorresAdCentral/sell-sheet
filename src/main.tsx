import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './assets/styles/styles.css';
import DummyComponent from './dummy/DummyComponent';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <DummyComponent />
  </StrictMode>
);
