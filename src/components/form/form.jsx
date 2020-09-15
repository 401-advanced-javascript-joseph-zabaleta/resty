import React from 'react';
import './form.scss';

import MethodButton from './methodButton.js';

export default class Form extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

            method: 'GET',
            url: '',
            displaySection: false,

        };

        this.handleURLChange = this.handleURLChange.bind(this);
        this.executeRequest = this.executeRequest.bind(this);
        this.listCallback = this.listCallback.bind(this);

    };


    handleURLChange(e) {

        e.preventDefault();
        this.setState({
            url: e.target.value
        });

    };


    executeRequest(e) {

        e.preventDefault();
        this.setState({
            displaySection: true
        });

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

                <div id='form'>

                    <section id='url-input'>
                        <label>
                            URL:
                        </label>

                        <input onChange={this.handleURLChange} value={this.state.url} type='text' id='url' name='url'></input>

                        <button onClick={this.executeRequest}>
                            GO!
                        </button>
                    </section>


                        <ul>

                            <MethodButton method='GET' activeMethod={this.state.method} methodChange={this.listCallback} />
                            <MethodButton method='POST' activeMethod={this.state.method} methodChange={this.listCallback}/>
                            <MethodButton method='PUT' activeMethod={this.state.method} methodChange={this.listCallback}/>
                            <MethodButton method='DELETE' activeMethod={this.state.method} methodChange={this.listCallback}/>

                        </ul>


                    {this.state.displaySection ?
                        <section id='display'>
                            <p>
                                {this.state.method} {this.state.url}
                            </p>
                        </section> : <section></section>}

                </div>

            </div>

        );

    };

};
