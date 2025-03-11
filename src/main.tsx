import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import DevicesComponent from './devices/Devices';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <DevicesComponent />
  </StrictMode>
);
