import React from 'react';
import './app.scss';

import Header from './components/header/header.jsx';
import Form from './components/form/form.jsx';
import Footer from './components/footer/footer.jsx';

export default class App extends React.Component {

    render() {

        return (

            <div>
                <Header />
                <Form />
                <Footer />
            </div>

        );

    };

};

