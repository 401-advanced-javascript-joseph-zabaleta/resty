import React from 'react';
import './form.scss';
import axios from 'axios';

import MethodButton from './methodButton.jsx';
import ErrorComponent from '../error/error.jsx';

export default class Form extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

            method: 'GET',
            url: 'http://localhost:3001/api/v1/categories',
            requestBody: {},
            errorText: '',

        };

        this.handleURLChange = this.handleURLChange.bind(this);
        this.handleRequestBodyChange = this.handleRequestBodyChange.bind(this);
        this.executeRequest = this.executeRequest.bind(this);
        this.listCallback = this.listCallback.bind(this);

    };


    handleURLChange(e) {

        this.setState({
            url: e.target.value
        });

    };


    handleRequestBodyChange(e) {

        this.setState({
            requestBody: e.target.value
        });

    };

    async executeRequest(e) {

        let results;
        let config = { crossdomain: true };

        switch (this.state.method) {

            case 'GET':

                try {

                    results = await axios.get(this.state.url, config);
                    console.log(results);

                } catch (error) {
                    throw error;
                };

                break;

            case 'POST':

                let requestBody;

                try {
                    requestBody = JSON.parse(this.state.requestBody);
                } catch (error) {

                    this.setState({
                        errorText: 'Invalid Request Body. Please ensure the request body is in proper JSON format'
                    });

                    return

                };

                try {

                    results = await axios.post(this.state.url, requestBody, config);
                    console.log(results);

                } catch (error) {
                    throw error;
                };

                break;

            default:
                break;

        }
    };


    listCallback(method) {

        this.setState({
            method: method,
            displaySection: false,
        });

    };


    render() {

        return (

            <div id='form-container'>

                <ErrorComponent errorText={this.state.errorText} />

                <div id='form'>

                    <section id='url-input'>
                        <label>
                            URL:
                        </label>

                        <input onChange={this.handleURLChange} value={this.state.url} type='text'></input>

                        <button onClick={this.executeRequest}>
                            GO!
                        </button>
                    </section>


                    <ul>

                        <MethodButton method='GET' activeMethod={this.state.method} methodChange={this.listCallback} />
                        <MethodButton method='POST' activeMethod={this.state.method} methodChange={this.listCallback} />
                        <MethodButton method='PUT' activeMethod={this.state.method} methodChange={this.listCallback} />
                        <MethodButton method='DELETE' activeMethod={this.state.method} methodChange={this.listCallback} />

                        <textarea onChange={this.handleRequestBodyChange} id='request-body-textarea' rows="10" cols="5"></textarea>
                    </ul>

                </div>

            </div>

        );

    };

};
