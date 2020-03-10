import React from 'react'
import { Switch, Route } from
    'react-router-dom';
import Home from './Home';
import GuessMe from './GuessMe';
import RandomInt from './RandomInt';
import Next from './Next';
import Register from './Register/Register';


const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/GuessMe" component={GuessMe} />
            <Route path="/Randomint" component={RandomInt} />
            <Route path="/Next" component={Next} />
            <Route path="/Register" component={Register} />
        </Switch>
    </main>
)

export default Main