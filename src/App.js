import * as React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Join from './Components/Join/Join';

import Dashboard from './Components/Dashboard/Dashboard';

const App = ()=>{
    return (
    <Router>
        <Route path="/" exact component={Join}/>
        <Route path="/dashboard" component={Dashboard}/>
    </Router>
    )
}

export default App;