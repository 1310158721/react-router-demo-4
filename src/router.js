import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from './components/index'
import About from './components/about'
import Home from './components/home'
import Other from './components/other'

export default class WrapperRouter extends React.Component {
    render () {
    	return (
    		<Switch>
                <Route path='/wrapper/index' component={ Index } />
                <Route path='/wrapper/home' component={ Home } />
                <Route path='/wrapper/about' component={ About } />
                <Route path='/wrapper/other' component={ Other } />
    		</Switch>
    	)
    }
}