import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Next extends Component {

    constructor(props) {
        super(props);
        this.state = { riddle: '', inputText: '', mode: 'view', response: 'dragon', showHint: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.newHint = this.newHint.bind(this);

    }

    handleChange(e) {
        this.setState({ inputText: e.target.value });

    }

    handleSave() {
        this.setState({ text: this.state.inputText, mode: 'view' });
    }

    handleEdit() {
        this.setState({ mode: 'edit', inputText: this.state.response });
    }

    newHint() {
        this.setState({
            showHint: !this.state.showHint
        })
    }

    render() {

        if (this.state.mode === 'view' && this.state.text === this.state.response) {

            return (

                <div>


                    <p>You win! Answer is '{this.state.response}'.</p>

                    <button type="button" className="btn blue" onClick={this.handleEdit}>
                        Reset
                 </button>


                    <Link to={"/randomint"} type="button" className="btn green" >
                        See your Score</Link>

                </div>
            );
        } else {
            return (
                <>
                    <div>
                        <Link className="btn grey darken-1" to="/GuessMe">
                            Back
                </Link>
                    </div>

                    <div>
                        <h4>New Guess!</h4>
                        <div className="collection">
                            <button type="button" className="btn green">Hint:</button> I can fly, I can set a fire and there are lots of tails about me.
                 </div>

                        <input
                            onChange={this.handleChange}
                            value={this.state.inputText}
                        />
                        <button type="button" className="btn green" onClick={this.handleSave}>
                            Save
                    </button>

                    </div>

                    <div>
                        <h5>
                            Next Hint
                    </h5>
                        {
                            this.state.showHint ?
                                <div>
                                    A mythical creature with a tail.
                        </div>
                                : null
                        }
                        <button className="btn orange darken-3" onClick={() => this.newHint()} >Get extra hint</button>
                    </div>
                </>
            )


        }

    }
}
