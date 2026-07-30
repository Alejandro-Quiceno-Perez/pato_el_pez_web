import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageLoader from '../components/UI/PageLoader';
const Home = lazy(() => import("../pages/Home"));
const Music = lazy(() => import("../pages/Music"));
const Merch = lazy(() => import("../pages/Merch"));
const Videos = lazy(() => import("../pages/Videos"));
const PressKit = lazy(() => import("../pages/PressKit"));
const Recorrido = lazy(() => import('../pages/Recorrido'));
const Layout = lazy(() => import('../components/layouts/layout'));
const Fans = lazy(() => import('../pages/Fans'));

// import Music from "../pages/Music";
// import Merch from "../pages/Merch";
// import Videos from "../pages/Videos";
// import PressKit from "../pages/PressKit";
// import Recorrido from '../pages/Recorrido';
// import Layout from '../components/layouts/layout';
// import Fans from '../pages/Fans';


const AppRoutes = () => {
    return (
        <Router>

            <Suspense fallback={<PageLoader />}>

                <Routes>

                    <Route path="/" element={<Layout />}>

                        <Route index element={<Home />} />

                        <Route path="music" element={<Music />} />

                        <Route path="merch" element={<Merch />} />

                        <Route path="videos" element={<Videos />} />

                        <Route path="press-kit" element={<PressKit />} />

                        <Route path="fans" element={<Fans />} />

                        <Route path="recorrido" element={<Recorrido />} />

                    </Route>

                </Routes>

            </Suspense>

        </Router>
    )
}

export default AppRoutes
