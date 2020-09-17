import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './app.scss';

import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';
import Footer from './components/footer/footer.jsx';

export default class App extends React.Component {

    render() {

        return (

            <>
                <BrowserRouter>
                    <Header />
                    <Main />
                    <Footer />
                </BrowserRouter>
            </>

        );

    };

};

