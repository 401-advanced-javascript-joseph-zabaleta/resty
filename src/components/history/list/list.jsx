import React from 'react';
import Results from '../../results/results.jsx';
import './list.scss';

export default class List extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {

            results: null

        }
    }

    handleClick(entry) {

        this.setState({
            results: entry.response
        });

    };


    render() {

        return (

            <section id='history-page'>

                <aside>
                    {this.props.history.slice(0).reverse().map((entry, index) => (

                        <div className="url" key={index}>
                            <span onClick={() => { this.handleClick(entry) }}>

                                <button>
                                    {entry.request.method}
                                </button>

                                {entry.request.url}
                            </span>
                        </div>

                    ))}
                </aside>

                <article>
                    <Results results={this.state.results} />
                </article>

            </section>
        )

    };
};

