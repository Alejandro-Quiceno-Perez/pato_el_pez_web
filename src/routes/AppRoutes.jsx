import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../pages/Home'
import Music from "../pages/Music";
import Merch from "../pages/Merch";
import Videos from "../pages/Videos";
import PressKit from "../pages/PressKit";
import Recorrido from '../pages/Recorrido';
import Layout from '../components/layouts/layout';
import Fans from '../pages/Fans';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Layout principal */}
                <Route path='/' element={<Layout />}>
                    {/* Home */}
                    <Route index element={<Home />} />
                    {/* Paginas */}
                    <Route path="music" element={<Music />} />
                    <Route path="merch" element={<Merch />} />
                    <Route path="videos" element={<Videos />} />
                    <Route path="press-kit" element={<PressKit />} />
                    <Route path="fans" element={<Fans />} />
                    <Route path="recorrido" element={<Recorrido />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
