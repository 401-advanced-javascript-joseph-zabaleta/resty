import React from 'react';

import Form from '../form/form.jsx';
import Results from '../results/results.jsx';
import History from '../history/history.jsx';
import './main.scss';

export default class Main extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            results: null,
        };

        this.processResults = this.processResults.bind(this);
    };


    processResults(results) {

        this.setState({
            results: results
        });

    };



    render() {

        return (

            <div id='main'>
                <Form processResults={this.processResults} />

                <section>
                    <History />
                    <Results results={this.state.results} />
                </section>

            </div>

        );

    };

};
