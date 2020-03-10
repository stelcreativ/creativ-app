import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RandomInt extends Component {

    constructor(props) {
        super(props);
        this.state = {
            random: null,
            clicks: 0,
            show: true,
            item: ''

        }

        this.handleChange = this.handleChange.bind(this);
    }



    handleChange(e) {
        this.setState({ item: e.target.value });

    }

    IncrementScore = () => {
        this.setState({ clicks: this.state.clicks + 3 });
    }

    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }


    max = 10;

    handleRandom = (max) => {
        this.setState({ item: Math.floor(Math.random() * Math.floor(max)) });

    }


    handleClick = () => {

        this.setState({ clicks: this.state.item });
    }


    render() {

        return (
            <>

                <Link className="btn grey darken-1" to="/GuessMe">
                    Back
                </Link>


                <div>
                    <div className="collection">
                        <button type="button" className="btn green">Score: 2</button> Enter your score below to get a bonus
                 </div>

                    <input
                        onChange={this.handleChange}
                        placeholder="Enter your guess"

                    />


                    <div>
                        <div onClick={this.handleClick}></div>

                    </div>
                </div>


                <div className="bonus">
                    <div className="item-1"> <button className="btn blue darken-2" onClick={this.IncrementScore}>Add Bonus</button></div>
                    <div className="item"><button className="btn grey darken-2" onClick={this.DecreaseItem}>Click to decrease</button></div>
                    <button className="btn pink darken-2" onClick={this.ToggleClick}>
                        {this.state.show ? 'Hide number' : 'Show number'}
                    </button>
                    {this.state.show ? <h2>{this.state.clicks}</h2> : ''}

                    <h4> {this.IncrementScore}</h4>
                </div>

            </>
        );
    }


}
