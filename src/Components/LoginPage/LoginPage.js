import React, { Component } from "react";
import AppHeader from "../AppHeader/AppHeader.js";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
class LoginPage extends Component{
	constructor(args) {
		super(args);
		this.state = {
			getUserName: "",
			getPassword: "",
			errorShownUser: false,
			errorShownPassword: false
		};
	}

	userNameText(e){
		let getNameValue = e.target.value;
		if(getNameValue.length > 0) {
			this.props.users.map((data,  idx) => {
			});
			this.setState({
				getUserName: getNameValue
			});
		}

	}

	passwordText(e) {
		let getPasswordValue = e.target.value;
		if(getPasswordValue.length > 0) {
			this.setState({
				getPassword: getPasswordValue
			});
		}
	}

	loginInSuccess(e){
		e.preventDefault();
		if(this.state.getUserName && this.state.getPassword){
			this.setState({
				errorShownUser: false,
				errorShownPassword: false
			});

		}else if(!this.state.getUserName && !this.state.getPassword){
			this.setState({
				errorShownUser: true,
				errorShownPassword: true
			});
		}
		if(!this.state.getUserName) {
			this.setState({
				errorShownUser: true
			});
		} else if(!this.state.getPassword){
			this.setState({
				errorShownPassword: true
			});
		} 
		 this.props.history.push("/add-team");
	}	
	
	render() {
	    return (
	        <div>
	        <AppHeader />
	        	<div className="w3-row">
	        		<div className="w3-container">
	        			<div className="w3-row">
	        				<div className="w3-col s12 m10 l8 button-group w3-row">
	        					<p className="w3-row w3-center" style={{fontSize: "24px"}}>LOGIN PAGE</p>
	        					<form>
	        						<div className="w3-row user-box">
	        							<label style={{fontSize: "20px"}}>Username</label><br/><br/>
	        							<input type="text" className="textbox-data"  placeholder="Username" onChange={this.userNameText.bind(this)} />
	        							<br />
	        							{(this.state.errorShownUser) ?
	        								<label className="warning-message">UserName must not be empty!</label>: 
	        								null
	        							}
	        							
	        						</div>

	        						<div className="w3-row password-box">
	        							<label style={{fontSize: "20px"}}>Password</label><br/><br/>
	        							<input type="password" className="textbox-data"  placeholder="Password" onChange={this.passwordText.bind(this)} />
	        							<br />
	        							{(this.state.errorShownPassword) ?
		        							<label className="warning-message">Password must not be empty!</label>:
		        							null
	        							}
	        						</div>

	        						<div className="w3-row button-group-login">

	        							<Link to="add-team">
	        							<button className="w3-black w3-hover-green w3-left w3-col s2 m2 l2 button-design"
	        							//onClick={this.loginInSuccess.bind(this)}
	        							style={{height: "50px"}}>Login In</button>
	        							</Link>
	        							<div className="w3-col s8 m8 l8">&nbsp;</div>
	        							<Link to="sign-up">
	        							<button className="w3-black w3-hover-green w3-col s2 m2 l2 button-design" 
	        							style={{height: "50px"}}>Sign Up</button>
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
	return bindActionCreators({}, dispatch);
}

export default  connect(mapStateToProps, mapDispatchToProps)(LoginPage);