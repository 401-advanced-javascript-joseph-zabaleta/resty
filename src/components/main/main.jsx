import React from 'react';
import axios from 'axios';

import Form from '../form/form.jsx';
import Results from '../results/results.jsx';
import History from '../history/history.jsx';
import ErrorComponent from '../error/error.jsx';
import StorageService from '../../utils/storage-service.js';
import './main.scss';
import { render } from 'react-dom';

export default class Main extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            results: null,
            request: {
                method: 'GET',
                url: '',
                data: {},
            },
            history: [],
            errorText: '',
        };

        // this.processResults = this.processResults.bind(this);
        this.executeRequest = this.executeRequest.bind(this);
        this.updateFormDefaults = this.updateFormDefaults.bind(this);
    };


    // processResults(results) {

    //     this.setState({
    //         results: results
    //     });

    // };

    async executeRequest(request) {

        let config = { crossdomain: true };

        try {

            if (request.method === 'PUT' || request.method === 'POST') {

                request.data = JSON.parse(request.data);
            };

        } catch (error) {

            this.setState({
                errorText: 'Invalid Request Body. Please ensure the request body is in proper JSON format'
            });

            return;
        }


        try {

            let response = await axios(request, config);

            this.setState({
                results: response,
                errorText: ''
            });

            StorageService.save(request);


        } catch (error) {
            throw error;
        };

    };


    updateFormDefaults(entry) {

        this.setState({
            request: entry
        });

    };



    render() {

        return (

            <div id='main'>
                <Form request={this.state.request} executeRequest={this.executeRequest} >
                    <ErrorComponent errorText={this.state.errorText} />
                </Form>

                <section>
                    {/* <History updateFormDefaults={this.updateFormDefaults} /> */}
                    {/* <Results results={this.state.results} /> */}
                </section>

            </div>

        );

    };

};
