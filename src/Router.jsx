import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import App from "./App";
import * as React from 'react';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ContainerCard from './Components/ContainerCard/ContainerCard';
import { CursorProvider } from 'react-cursor-custom'
import History from "./History";




export function AppRoutes() {

    return (
        <>
            <CursorProvider color={"#0091ff"} noRing={false} ringSize={50} transitionTime={0}>
                <Header />
                <div className="flex justify-content-center" style={{ marginTop: "50px" }}>
                    <ContainerCard>
                        <Router>
                            <Routes>

                                <Route path="/" element={<App />} />
                                <Route path="/history" element={<History />} />

                            </Routes>
                        </Router>
                    </ContainerCard>
                </div>
                <Footer />
            </CursorProvider>

        </>
    )
}