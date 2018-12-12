import React from 'react'
import { Link } from 'react-router-dom'
import '../common/nav.css'

export default class Nav extends React.Component {
	render () {
		return (
			// 静态路由
			<ul className="nav">
				<li>
				    <Link to='/wrapper/index'>Index</Link>
				</li>
				<li>
				    <Link to='/wrapper/about'>About</Link>
				</li>
				<li>
				    <Link to='/wrapper/home'>Home</Link>
				</li>
				<li>
				    <Link to='/wrapper/other'>Other</Link>
				</li>
				<li>
				    <Link to='/404'>Error</Link>
				</li>
				<li>
				    <Link to='/login'>Login</Link>
				</li>
			</ul>
		)
	}
}