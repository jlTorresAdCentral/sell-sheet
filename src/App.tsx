import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import NavigationRoutes from './navigation/navigation-routes';
import "./assets/styles/styles.css";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <NavigationRoutes />
    </BrowserRouter>
);