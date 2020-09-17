import React from 'react';
import './form.scss';
import _ from 'lodash';
import ReactJson from 'react-json-view';

import MethodButton from './methodButton.jsx';

export default class Form extends React.Component {

    constructor(props) {

        const method = props.request.method || 'GET'
        const url = props.request.url || ''
        const data = props.request.data || {}


        super(props);
        this.state = {

            method,
            url,
            data,

        };

        this.handleURLChange = this.handleURLChange.bind(this);
        this.handleRequestBodyChange = this.handleRequestBodyChange.bind(this);
        this.listCallback = this.listCallback.bind(this);

    };

    componentDidUpdate(previousProps) {

        if (!_.isEqual(previousProps.request, this.props.request)) {
            this.setState({
                method: this.props.request.method,
                url: this.props.request.url,
                data: this.props.request.data,
            })
        };

    };


    handleURLChange(e) {

        this.setState({
            url: e.target.value
        });

    };


    handleRequestBodyChange(e) {

        console.log(e)

        this.setState({
            data: e.updated_src
        });

    };


    listCallback(method) {

        this.setState({
            method,
        });

    };


    render() {

        let style = {
            padding: "3px",
            "borderRadius": "5px",
            "minHeight": "100px",
            minWidth: "50%",
            // width: "30%"
        }

        return (

            <div id='form-container'>

                {this.props.children}

                <div id='form'>

                    <section id='url-input'>
                        <label>
                            URL:
                        </label>

                        <input onChange={this.handleURLChange} value={this.state.url} type='text'></input>

                        <button onClick={() => { this.props.executeRequest(this.state) }}>
                            GO!
                        </button>
                    </section>


                    <ul>

                        <MethodButton method='GET' activeMethod={this.state.method} methodChange={this.listCallback} />
                        <MethodButton method='POST' activeMethod={this.state.method} methodChange={this.listCallback} />
                        <MethodButton method='PUT' activeMethod={this.state.method} methodChange={this.listCallback} />
                        <MethodButton method='DELETE' activeMethod={this.state.method} methodChange={this.listCallback} />

                        <ReactJson src={this.state.data} style={style} displayDataTypes={false} onEdit={this.handleRequestBodyChange} onAdd={this.handleRequestBodyChange} theme="tube" />
                    </ul>

                </div>

            </div>

        );

    };

};
