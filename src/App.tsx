import { Routes, Route } from 'react-router-dom';
import type { JSX } from 'react/jsx-runtime';
import Home from './Home.tsx';
import AboutMe from './AboutMe.tsx';
import FakeStore from './FakeStore.tsx';

export default function App(): JSX.Element {
    return (
        <>
            <Routes>
                <Route path= "/" element={ <Home/> } />
                <Route path= "/aboutMe" element={ <AboutMe/> } />
                <Route path= "/FakeStore" element={ <FakeStore/> } />
            </Routes>
        </>
    )
}