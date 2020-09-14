import React from 'react';
import './form.scss';

export default class Form extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

            method: 'GET',
            url: '',

        };

    };


    render() {

        return (

            <div id='form-container'>
                <form id ='form'>

                    <section id='url-input'>

                        <label>
                            URL:
                        </label>

                        <input type='text' id='url' name='url'></input>

                        <button type='submit'>
                            GO!
                        </button>

                    </section>

                    <ul>

                        <li onClick={() => this.setState({method: 'GET'})}>
                            GET
                        </li>

                        <li onClick={() => this.setState({method: 'POST'})}>
                            POST
                        </li>

                        <li onClick={() => this.setState({method: 'PUT'})}>
                            PUT
                        </li>

                        <li onClick={() => this.setState({method: 'DELETE'})}>
                            DELETE
                        </li>

                    </ul>

                </form>

                <section id='display'>

                    <p>
                        {this.state.method} {this.state.url}
                    </p>

                </section>


            </div>

        );

    };

};
