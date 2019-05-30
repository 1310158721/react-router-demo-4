import React from 'react'
import '../common/wrapper.css'
import WrapperRouter from '../router'
import Nav from './nav'
import Header from './header'

export default class Wrapper extends React.Component {
	
	render () {
		return (
			<React.Fragment>
			    <div className="wrapper">
			        <div className="top">
			            <Header />
			        </div>
			        <div className="bot">
			            <div className="left">
			                <Nav />
			            </div>
			            <div className="right">
			                <WrapperRouter />
			            </div>
			        </div>
			    </div>
			</React.Fragment>
		)
	}
}
