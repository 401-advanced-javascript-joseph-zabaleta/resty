import React from 'react';
import './app.scss';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';

export default class App extends React.Component {

    render() {

        return (

            <div>
                <Header />
                <Footer />
            </div>

        );

    };

};

