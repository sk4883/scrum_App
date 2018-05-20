import React, { Component } from "react";
import AppHeader from "../AppHeader/AppHeader.js";
import {postUser} from "./../../action/registerUserActions.js";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { Link } from "react-router-dom";

class SignUpPage extends Component{
	constructor(args) {
		super(args);
		this.state = {
			getUserName: "",
			getAssociate: "",
			getRole: "",
			getEmail: "",
			getPassword: "",
			errorShownUserName: false,
			errorShownAssociate: false,
			errorShownRole: false,
			errorShownEmail: false,
			errorShownPassword: false,
			getEmailValidation: false,
			registeredUser: []
		};
	}

	userNameText(e) {
		let getUserNameValue = e.target.value;
		if(getUserNameValue.length > 0){
			this.setState({
				getUserName: getUserNameValue
			});
		}
	}

	associateText(e) {
		let getAssociateValue = e.target.value;
		if(getAssociateValue.length > 0){
			this.setState({
				getAssociate: getAssociateValue
			});
		}
	}

	roleText(e){
		let getRoleValue = e.target.value;
		if(getRoleValue.length > 0){
			this.setState({
				getRole: getRoleValue
			});
		}
	}

	emailText(e){
		let getEmailValue = e.target.value;
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(getEmailValue.length > 0 && getEmailValue.match(mailformat)){
			this.setState({
				getEmail: getEmailValue,
				getEmailValidation: false,
				errorShownEmail: false
			});
		} else{
			this.setState({
				getEmailValidation: true
			});
		}
	}

	passwordText(e){
		let getPasswordValue = e.target.value;
		if(getPasswordValue.length > 0){
			this.setState({
				getPassword: getPasswordValue
			});
		}
	}

	registerSuccess() {
		if(this.state.getUserName && this.state.getAssociate && this.state.getRole
		 && this.state.getEmail && this.state.getPassword) {
			this.setState({
				errorShownUserName: false,
				errorShownAssociate: false,
				errorShownRole: false,
				errorShownEmail: false,
				errorShownPassword: false
			});
			//registeredUsser: []
			let registeredObjectUser= {};

			registeredObjectUser["username"] = this.state.getUserName;
			registeredObjectUser["password"] = this.state.getPassword;

			this.props.postUser(registeredObjectUser);


		} else if(!this.state.getUserName && !this.state.getAssociate && !this.state.getRole
		 && !this.state.getEmail && !this.state.getPassword){
			this.setState({
				errorShownUserName: true,
				errorShownAssociate: true,
				errorShownRole: true,
				errorShownEmail: true,
				errorShownPassword: true
			});
		}
		if(!this.state.getUserName){
			this.setState({
				errorShownUserName: true
			});
		} 
		if(!this.state.getAssociate) {
			this.setState({
				errorShownAssociate: true
			});
		} 
		if(!this.state.getRole) {
			this.setState({
				errorShownRole: true
			});
		} 
		 if(!this.state.getEmail) {
			this.setState({
				errorShownEmail: true
			});
		}
		 if(!this.state.getPassword) {
			this.setState({
				errorShownPassword: true
			});
		}
	}
	
	render() {
	    return (
	        <div>
	        	<AppHeader />
	       		<div className="w3-row">
	        		<div className="w3-container">
	        			<div className="w3-row">
	        				<div className="w3-col s12 m10 l8 button-group w3-row">
	        				<p className="w3-row w3-center" style={{fontSize: "24px"}}>SIGN-UP PAGE</p>
	        					<form>
	        						<div className="w3-row user-box">
	        							<label style={{fontSize: "20px"}}>Username</label><br/><br/>
	        							<input type="text" 
	        							onChange={this.userNameText.bind(this)} className="textbox-data"  placeholder="Username" /><br />
	        							{(this.state.errorShownUserName) ? 
	        								<label className="error-warning">UserName must not be empty!</label>:
	        								null
	        							}
	        						</div>

	        						<div className="w3-row associate-id">
	        							<label style={{fontSize: "20px"}}>Associate-ID</label><br/><br/>
	        							<input type="number" 
	        							onChange={this.associateText.bind(this)} className="textbox-data"  placeholder="Associate-ID" /><br />
	        							{(this.state.errorShownAssociate) ? 
	        								<label className="error-warning">Associate-ID must not be empty!</label>:
	        								null
	        							}
	        						</div>

	        						<div className="w3-row role-text">
	        							<label style={{fontSize: "20px"}}>Role</label><br/><br/>
	        							<input type="text" 
	        							onChange={this.roleText.bind(this)} className="textbox-data"  placeholder="Role" /><br />
	        							{(this.state.errorShownRole) ? 
	        								<label className="error-warning">Role must not be empty!</label>:
	        								null
	        							}
	        						</div>

	        						<div className="w3-row email-text">
	        							<label style={{fontSize: "20px"}}>E-Mail</label><br/><br/>
	        							<input type="text" 
	        							onChange={this.emailText.bind(this)} className="textbox-data"  placeholder="E-Mail" /><br />
	        							{(this.state.errorShownEmail) ? 
	        								<label className="error-warning">Email must not be empty!</label>:
	        								null
	        							}
	        							{(this.state.getEmailValidation) ? 
	        								<label className="error-warning">Email must be valid!</label>:
	        								null
	        							}
	        						</div>

	        						<div className="w3-row password-box">
	        							<label style={{fontSize: "20px"}}>Password</label><br/><br/>
	        							<input type="password" 
	        							onChange={this.passwordText.bind(this)} className="textbox-data"  placeholder="Password" /><br />
	        							{(this.state.errorShownPassword) ? 
	        								<label className="error-warning">Password must not be empty!</label>:
	        								null
	        							}
	        						</div>

	        						<div className="w3-row button-group-sign-up">
	        							
	        							<button className="w3-black w3-hover-green w3-left w3-col s2 m2 l2 button-design" 
	        							onClick={this.registerSuccess.bind(this)}
	        							style={{height: "50px"}}>Register</button>
	        							
	        							<div className="w3-col s8 m8 l8">&nbsp;</div>

	        							<Link to="login">
	        							<button className="w3-black w3-hover-green w3-col s2 m2 l2 button-design" 
	        							style={{height: "50px"}}>Login</button>
	        							</Link>
	        						</div>
	        						
	        					</form>
	        				</div>
	        			</div>
	        		</div>
	        	</div>
	        </div>
	    );
	}
}




function mapStateToProps(state) {
	return {
		users: state.users.users
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({postUser: postUser}, dispatch);
}

export default  connect(mapStateToProps, mapDispatchToProps)(SignUpPage);