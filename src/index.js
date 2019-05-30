import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Error from './components/error'
import Login from './components/login'

import PropTypes from 'prop-types'


class AllRouter extends React.Component {
	// 引入 router 参数，不要吧该组件被 BrowserRouter/HashRouter 等直接包裹，不然拿不到 router
	static contextTypes = {
		router: PropTypes.shape({
		  history: PropTypes.shape({
			push: PropTypes.func.isRequired,
			replace: PropTypes.func.isRequired,
			createHref: PropTypes.func.isRequired
		  }).isRequired
		}).isRequired
	}

	componentDidMount () {
		this.context.router.history.listen((path) => {
			console.log(path)
		})
	}
	
	render () {
		return (
			// 以下路由为所有的路由，包括在 APP组件中的所有路由
			<Switch>
			    <Route path='/wrapper' component={ App } />
			    <Route path='/login' component={ Login } />
               	<Route exact path='/' render={ () => <Redirect to='/wrapper/index' /> } />
				<Route path='*' component={ Error } />
			</Switch>
		)
	}
}

class Pages extends React.Component {
	// wrapper里面的子路由, 路由补充，不属于wrapper里面的子路由，而是单独的路由
	render () {
		return (
			<BrowserRouter>
				<AllRouter />
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<Pages />, document.getElementById('root'))
