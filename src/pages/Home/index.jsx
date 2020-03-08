import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
export default class Home extends React.Component {

	render() {
		return (
			<div className="home">
				<div className="test">
					<div className="title">测试</div>
					<Link to="/test">请求测试</Link>
				</div>
				<div className="utils">
					<div className="title">工具</div>
					<Link to="/encrypt">私钥加解密</Link>
					
				</div>
				{/* <iframe class="f1" title="4" width="1431" height="804.6" src="https://avgle.com/embed/6f9ef26d7e0f0d00c9a8" frameborder="0" allowfullscreen></iframe>
				<iframe class="fl" title="1" width="1431" height="804.6" src="https://avgle.com/embed/c538f1fab45e4a8a79ec" frameborder="0" allowfullscreen></iframe>
				<iframe class="fl" title="2" width="1431" height="804.6" src="https://avgle.com/embed/ca9ad486065f56d2793a" frameborder="0" allowfullscreen></iframe>
				<iframe class="fl" title="3" width="1431" height="804.6" src="https://avgle.com/embed/df0faeea711d44676049" frameborder="0" allowfullscreen></iframe> */}
			</div>
		)
	}
}