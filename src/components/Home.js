import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <h4 className="title center">Guess Me</h4>
                </div>


                <div class="row">
                    <div class="col s12 l10a">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">A fun game</span>
                                <p>Keep focused as you climb the steps. It's easy to play! Use the hint to make a guess.
                                    Enter your response as a single word, in lower case.
                                   Then click the 'Save' button to get the result.
                                </p>
                            </div>
                            <div class="card-action">
                                <Link className="btn green darken-2 center" to={'/GuessMe'}>START HERE
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

