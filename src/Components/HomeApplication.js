import React, { Component } from "react";
import AppHeader from "./AppHeader/AppHeader.js";
import { Link } from "react-router-dom";
export default class HomeApplication extends Component{
	constructor(args) {
		super(args);
		this.state = {

		};
	}
	
	render() {
	    return (
	        <div>
	        	<AppHeader />
	        	<div className="w3-row">
	        		<div className="w3-container">
	        			<div className="w3-row">
	        				<div className="w3-col s12 m10 l8 button-group w3-row">
	        					<Link to="login">
	        					<button className="w3-black w3-hover-green w3-left w3-col s4 m4 l4 button-design" 
	        					style={{height: "50px"}}>Login In</button>
	        					</Link>
	        					<div className="w3-col s4 m4 l4">&nbsp;</div>
	        					<Link to="sign-up">
	        					<button className="w3-black w3-hover-green w3-col s4 m4 l4 button-design" 
	        					style={{height: "50px"}}>Sign Up</button>
	        					</Link>
	        				</div>
	        			</div>
	        		</div>
	        	</div>
	        </div>
	    );
	}

}