import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Error from './components/error'
import Login from './components/login'

class Pages extends React.Component {
	// wrapper里面的子路由, 路由补充，不属于wrapper里面的子路由，而是单独的路由
	render () {
		return (
			<BrowserRouter>
			    <Switch>
			        <Route path='/wrapper' component={ App } />
			        <Route path='/404' component={ Error } />
			        <Route path='/login' component={ Login } />
                    <Route exact path='/' render={ () => <Redirect to='/wrapper/index' /> } />
			    </Switch>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<Pages />, document.getElementById('root'))
