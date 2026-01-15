import { Header } from '../components/Header.jsx'
import './Page404.css'

export function Page404() {
    return (
        <>
        <Header />

        <div className='not-found-container'>
            <p className='not-found-message'>You are lost, hehehehe!!</p>
        </div>

        </>
    )
}