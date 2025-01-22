import { Outlet } from 'react-router-dom'


export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                    <h1>Lloyds Share Prices</h1>   
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}