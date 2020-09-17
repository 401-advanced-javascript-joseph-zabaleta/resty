import React from 'react';
import axios from 'axios';

import Form from '../form/form.jsx';
import Results from '../results/results.jsx';
import History from '../history/history.jsx';
import ErrorComponent from '../error/error.jsx';
import StorageService from '../../utils/storage-service.js';
import './main.scss';


export default class Main extends React.Component {

    constructor(props) {

        const history = StorageService.retrieve();

        super(props)
        this.state = {
            results: null,
            request: {
                method: 'GET',
                url: '',
                data: {},
            },
            history,
            errorText: '',
        };

        this.executeRequest = this.executeRequest.bind(this);
        this.updateFormDefaults = this.updateFormDefaults.bind(this);
    };



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

            let history = StorageService.save(request);

            this.setState({
                results: response,
                history,
                errorText: ''
            });



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
                    <History history={this.state.history} updateFormDefaults={this.updateFormDefaults} />
                    <Results results={this.state.results} />
                </section>

            </div>

        );

    };

};
