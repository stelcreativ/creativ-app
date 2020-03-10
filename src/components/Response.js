import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Response extends Component {


    constructor(props) {
        super(props);
        this.state = {
            text: '',
            inputText: '',
            mode: 'view',
            response: 'apple',
            fail: '', visible: false
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    handleChange(e) {
        this.setState({ inputText: e.target.value });

    }

    handleSave() {

        this.setState({ text: this.state.inputText, mode: 'view', fail: ' is not the answer. Try again!' });

    }

    handleEdit() {

        this.setState({ mode: 'edit', inputText: this.state.response });

    }


    render() {


        if (this.state.mode === 'view' && this.state.text === this.state.response) {

            return (

                <div onClick={this.handleEdit}>

                    <p>You win! Answer is '{this.state.response}'.</p>


                    <Link to={"/next"} type="button" className="btn blue" >
                        Next</Link>


                </div >
            );

        } else {

            return (
                <>
                    <div>
                        <p>{this.state.inputText !== this.state.response ? this.state.text + '' + this.state.fail : ''}</p>

                        <input
                            onChange={this.handleChange}
                            placeholder="Enter your guess"
                        />

                        <button className="btn blue" onClick={this.handleSave} >
                            Save
                    </button>

                    </div>

                </>
            );

        }
    }
}