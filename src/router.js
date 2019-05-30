import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from './components/index'
import About from './components/about'
import Home from './components/home'
import Other from './components/other'
import Error from './components/error'

export default class WrapperRouter extends React.Component {
    render () {
    	return (
			// 以下路由为 App 路由下的子路由
    		<Switch>
                <Route path='/wrapper/index' component={ Index } />
                <Route path='/wrapper/home' component={ Home } />
                <Route path='/wrapper/about' component={ About } />
                <Route path='/wrapper/other' component={ Other } />
				{/* 以上路由都没匹配上的话则跳转到 Error 路由 */}
				<Route path='*' component={ Error } />
    		</Switch>
    	)
    }
}