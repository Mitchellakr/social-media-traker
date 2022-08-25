import React from 'react';
import Bottomcards from './components/Bottomcards';
import Header from './components/Header';
import Topgrid from './components/Topgrid';

export default function App() {
    return (
        <div className="app">

            <Header />
            <Topgrid />
            <Bottomcards />
        </div>
    );
}
