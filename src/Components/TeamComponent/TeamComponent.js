import React, { Component } from "react";
import Reveal from "../DummyComponents/Reveal";
import AppHeader from "../AppHeader/AppHeader.js";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {postTeamMember, getMember} from "./../../action/registerMemberActions.js";

class ChildMemberComponent extends Component {
	constructor(args) {
		super(args);
		this.state = {
			toggleData: true,
			displayTeamDataMember: false,
			teamMemberData: [],
			revealClass: "w3-show",
			teamMemberId: ""
		};
	}

	selectMember(teamMemberValue, indexValue) {
		if(indexValue === teamMemberValue.id){
			this.setState({
				teamMemberId: teamMemberValue.AssociateID
			}, () => {
				this.setState({
					revealClass: "w3-show"
				}, () => {
					this.setState({
						toggleData: false,
						displayTeamDataMember: true
					});
				});
			});
		}
	}

	closeModal(){
		this.setState({
			toggleData: true,
			displayTeamDataMember: false,
			revealClass: "w3-hide"
		});
	}



	render() {
		var displayMemberData = [];
		if(this.props.data){
			displayMemberData = this.props.data.map((data, idx) => {
				return (<div className="w3-col s4 m4 l4 team-member-card" 
					onClick={this.selectMember.bind(this, data, idx)} key={"index_" + idx}>
					<div className="w3-row card-title-member">
						<p className="w3-center">{data.AssociateID}</p>
					</div>
				</div>);
			});
		}	
		return (
			<div className="w3-row">

				{(this.state.toggleData) ?
					<div>
						{displayMemberData}
					</div>:
					<div> 
						{(this.state.displayTeamDataMember) ?
							<div>
				   			   <Reveal  openCls={this.state.revealClass}  customHeight="700px">
				    				<div className="w3-row">
				    					<div className="w3-col s12 m10 l8 modal-create">
					        				<div className="w3-row">
					        					<span className="fa fa-close w3-right close-icon" onClick={this.closeModal.bind(this)} />
					        					<p className="w3-center" style={{fontSize: "22px"}}>MEMBER ASSOCIATE-ID {this.state.teamMemberId}</p>
					        					<div className="w3-row">
					        						<div className="w3-col s5 m5 l5">
					        							<label className="w3-row">Yesterday's Work</label><br/>
					        							<textArea className="textArea-design"   placeholder="Yesterday's Work" />
					        						</div>
					        						<div className="w3-col s2 m2 l2 w3-center">
					        							&nbsp;
					        						</div>
					        						<div className="w3-col s5 m5 l5">
					        							<label className="w3-row">Today's Work</label><br/>
					        							<textArea className="textArea-design"   placeholder="Today's Work" />
					        						</div>
					        					</div>
					        				</div> 
				        				</div>
				    				</div>
				    			</Reveal>
					        </div> :
							null
						}
					</div>
					
				}

			</div>
		);
	}
}

class TeamComponent extends Component{
	constructor(args) {
		super(args);
		this.state = {
			teamName: "",
			getAssociateValue: "",
			revealClass: "w3-hide",
			errorShownAssociate: false,
			memberData: [],
			arrayContainer: [],
			memberObject: {},
			showAddBackButton: true

		};
	}

	componentDidMount(){
		if(this.props.data){
			let display = this.props.data.map((data, idx) => {
				return data.teamName;
			});
			this.setState({
				teamName: display
			});
		}
		this.props.getMember();
		if(this.props.members && this.props.members.length > 0 && this.props.data){			
			this.props.data.map((data) => {
				if(data.teamName){
					this.props.members.map((dataVal) => {
						dataVal.teamName.map((item) => {
							if(item === data.teamName){
								this.state.memberData.push(dataVal);
							}
						});				
					});
					
					this.setState({
						memberData: this.state.memberData
					});
				}
			});
		}
	}

	componentWillReceiveProps(newProps){
		if(newProps.data){
			let display = newProps.data.map((data, idx) => {
				return data.teamName;
			});
			this.setState({
				teamName: display
			});
		}
	}

	addMember(){
		this.setState({
			revealClass: "w3-show"
		});
	}

	associateNumber(e) {
		let getAssociate = e.target.value;
		if(getAssociate.length > 0) {
			this.setState({
				getAssociateValue: getAssociate
			});
		}
	}

	closeModal(){
		this.setState({
			revealClass: "w3-hide"
		});
	}

	saveData(){
		if(this.state.getAssociateValue) {

			const teamMemberArray = {
				id: this.state.memberData.length + 0,
				teamName: this.state.teamName,
				AssociateID: this.state.getAssociateValue
			};

			this.state.memberData.push(teamMemberArray);
			this.setState({
				memberData: this.state.memberData
			}, () => {
				this.props.postTeamMember(teamMemberArray);
				this.setState({
					revealClass: "w3-hide"
				});
			});
			
			
		} else if(!this.state.getAssociateValue){
			this.setState({
 				errorShownAssociate: true
			});
		}
		this.state.getAssociateValue = "";
	}

	cancelData(){
		this.state.getAssociateValue = "";
		this.setState({
			getAssociateValue: this.state.getAssociateValue
		});
	}

	backToTeam(e){
		e.preventDefault();
		this.props.backTeam();
	}


	
	render() {

	    return (
	        <div>
	        	<div className="w3-row">
	        	<div className="w3-container">
	        	{(this.state.showAddBackButton) ? 
	        	<div>
	        	<button className="w3-black w3-hover-green w3-left button-design"
	        	onClick={this.backToTeam.bind(this)}>BACK TO TEAM</button>
	        	<button className="w3-black w3-hover-green w3-right button-design"
	        	onClick={this.addMember.bind(this)}>ADD MEMBER</button>
	        	</div> :
	        	null 
	        }
	        	<p className="w3-center team-title-member">{this.state.teamName}</p>
    		    <Reveal  openCls={this.state.revealClass}  customHeight="700px">
    				<div className="w3-row">
    					<div className="w3-col s12 m10 l8 modal-create">
	        				<div className="w3-row">
	        					<span className="fa fa-close w3-right close-icon" onClick={this.closeModal.bind(this)} />
	        					<p className="w3-center" style={{fontSize: "22px"}}>TEAM AND MEMBER CREATION</p>
	        					<div className="w3-row" style={{paddingTop: "20px"}}>
	        						<label>Team Name</label><br/><br/>
	        						<input type="number" value={this.state.getAssociateValue} className="textbox-design" placeholder="Associate-ID" onChange={this.associateNumber.bind(this)} />
	        						{(this.state.errorShownAssociate) ?
	        							<label className="error-warning">Associate-ID should not be empty</label>:
	        							null
	        						}
	        					</div><br/>
	        				</div> 
	        				<div className="w3-row" style={{paddingTop: "20px"}}>
	        					<div className="w3-col s8 m8 l8">&nbsp;</div>
	        					<button className="w3-black w3-hover-green button-design w3-col s2 m2 l2" onClick={this.saveData.bind(this)}>Save</button>
	        					<button className="w3-black w3-hover-green button-design w3-col s2 m2 l2" onClick={this.cancelData.bind(this)}>Cancel</button>
	        				</div>
        				</div>
    				</div>
    			</Reveal>
	        	</div>
	        </div>
	        <ChildMemberComponent data={this.state.memberData}  />
	        </div>
	    );
	}
}


function mapStateToProps(state) {
	return {
		users: state.users.users,
		members: state.members.members
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({postTeamMember: postTeamMember, getMember: getMember}, dispatch);
}

export default  connect(mapStateToProps, mapDispatchToProps)(TeamComponent);