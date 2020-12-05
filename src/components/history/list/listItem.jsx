import React from 'react';

export default class ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };


    handleClick(event) {

        console.log('I am being clicked!')
        console.log(this.props);
    };


    render() {



        return (


            <span onClick={this.handleClick}>

                <button>
                    {this.props.entry.request.method}
                </button>

                {this.props.entry.request.url}
            </span>

        );

    };

};
