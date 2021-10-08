import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Content from './components/Content';
import Footer from './components/Footer';
import Home from './pages';
import { Route, Switch } from 'react-router-dom';
import about from './pages/about';
import Menu from './pages/menu';
import Dropdown from './components/Dropdown';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 700 && isOpen)
                setIsOpen(false);
            console.log('i resized');
        }
        window.addEventListener('resize', hideMenu);
    })
    return (
        <>
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={about} />
                <Route path="/menu" exact component={Menu} />
                {/* <Route path="/" exact component={Menu} /> */}
            </Switch>
            <Footer />
        </>
    );
}

export default App;