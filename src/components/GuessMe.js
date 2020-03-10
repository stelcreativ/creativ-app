import React, { Component } from 'react'
import Response from './Response';
import { Link } from 'react-router-dom';

export default class GuessMe extends Component {

    constructor() {
        super()
        this.state = {
            showHint: false

        }
        this.newHint = this.newHint.bind(this);
    }


    newHint() {
        this.setState({
            showHint: !this.state.showHint
        })
    }

    render() {


        return (
            <>
                <div className="container">

                    <Link className=" btn grey darken-1" to="/">
                        Back
                        </Link>

                    <h4>Guess who I am!</h4>


                    <div className="collection">
                        <button type="button" className="btn green">Hint:</button> I can be green, yellow or red and you've seen me on a famous brand's products worldwide.
                    </div>

                    <div>
                        <Response />
                    </div>

                </div>

                <div>
                    <h5>
                        Next Hint
                    </h5>
                    {
                        this.state.showHint ?
                            <div>
                                Adam and Eve
                        </div>
                            : null

                    }
                    <button className="btn orange darken-3" onClick={() => this.newHint()} >Get extra hint</button>
                </div>


                <div className="container options">
                    <div className="col s12 center">
                        <ul>

                            <Link className="icon">
                                <i className="fa fa-twitter circle blue"></i>
                            </Link>

                            <li className="icon">
                                <i className="fa fa-facebook circle blue darken-4"></i>
                            </li>

                            <li className="icon">
                                <i className="fa fa-linkedin circle light-blue darken-4"></i>
                            </li>
                        </ul>
                    </div> </div>


            </>
        )
    }
}

