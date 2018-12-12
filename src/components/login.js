import React from 'react'
import '../common/login.css'

export default class Login extends React.Component {
	// 动态路由
	linkClick (path) {
		this.props.history.push(path + '?id=' + new Date().getTime())
	}
	render () {
		return (
			<React.Fragment>
			    <h3>this is login page</h3>
			    <ul className='login'>
			    	<li onClick={this.linkClick.bind(this, '/wrapper/index')}>index</li>
			    	<li onClick={this.linkClick.bind(this, '/wrapper/about')}>about</li>
			    	<li onClick={this.linkClick.bind(this, '/wrapper/home')}>home</li>
			    	<li onClick={this.linkClick.bind(this, '/wrapper/other')}>other</li>
			    	<li onClick={this.linkClick.bind(this, '/404')}>error</li>
			    </ul>
			</React.Fragment>
		)
	}
}