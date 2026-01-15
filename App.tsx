import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AudioProvider } from './context/AudioProvider';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import PlayerPage from './pages/PlayerPage';
import PremiumPage from './pages/PremiumPage';

const App: React.FC = () => {
    return (
        <AudioProvider>
            <HashRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/explore" element={<ExplorePage />} />
                        <Route path="/library" element={<HomePage />} /> {/* Reuse Home as placeholder */}
                        <Route path="/premium" element={<PremiumPage />} />
                    </Route>
                    {/* Player page outside of Layout to handle its own full screen state */}
                    <Route path="/player" element={<PlayerPage />} />
                </Routes>
            </HashRouter>
        </AudioProvider>
    );
};

export default App;