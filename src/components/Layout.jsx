import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
    return (
        <>
            <Navbar />
            <main className='pt-20'>
                <Outlet />
            </main>
            <Footer />

        </>
    )
}
