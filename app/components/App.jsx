import React, { Component } from 'react'
import {Route, HashRouter as Router} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Catalogue from './catalogue/Catalogue'
import AddItem from './addItem/AddItem'

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <div>
                        <Route exact path="/" component={Catalogue}/>
                        <Route path="/add" component={AddItem}/>
                    </div>
                </Router>
            </MuiThemeProvider>
        )
    }
}

export default App