import React from 'react';

import Form from '../form/form.jsx';

export default class Main extends React.Component {

    constructor(props) {
        super(props)

        this.results = null;

        this.processResults = this.processResults.bind(this);
    };


    processResults(results) {

        this.setState({
            results: results
        });

    };



    render() {

        return (

            <div>
                <Form processResults={this.processResults} />
            </div>

        );

    };

};
