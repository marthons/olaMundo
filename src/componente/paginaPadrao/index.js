import { Outlet } from 'react-router-dom';
import Banner from 'componente/banner';

export default function PaginaPadrao() {
    return (
        <main>
            <Banner />

            <Outlet />
        </main>
    )
}