
import Header from './components/layouts/Header'
import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from "react-router-dom";
import './index.css'
export default function Root() {
    return (
        <HelmetProvider>
            <Header />
            <Outlet />
        </HelmetProvider>
    )
}


