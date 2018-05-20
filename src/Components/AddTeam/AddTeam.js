import React, { Component } from "react";
import AppHeader from "../AppHeader/AppHeader.js";
import Reveal from "../DummyComponents/Reveal";
import TeamComponent from "../TeamComponent/TeamComponent.js";
import { Link } from "react-router-dom";

class ChildComponent extends Component {
	constructor(args) {
		super(args);
		this.state = {
			toggleData: true,
			displayTeamDataMember: false,
			teamData: []
		};
		this.backTeam = this.backTeam.bind(this);
	}

	selectTeam(teamName, indexValue){
		console.log("TeamName, TeamName", teamName, indexValue);
		this.setState({
			toggleData: false
			
		});
		if(indexValue === teamName.id){
			this.state.teamData =[];
			this.state.teamData.push(teamName);
			this.setState({
				teamData: this.state.teamData
			}, () => {
				this.setState({
					displayTeamDataMember: true
				});
			});
		}
		


		console.log("state", this.state.teamData);
		this.props.changeButtonText();
	}

	backTeam(){
		this.setState({
			toggleData: true
		}, () => {
			this.props.showAddTeam();
		});

	}


	render() {
		var displayTeamData = [];
		if(this.props.data){
			displayTeamData = this.props.data.map((data, idx) => {
				return (
					<div>
						<div className="w3-col s4 m4 l4 team-card" 
							onClick={this.selectTeam.bind(this, data, idx)} key={"index_" + idx}>
						
							<div className="w3-row card-title">
								<p className="w3-center">{data.teamName}</p>
							</div>
							<div className="w3-row card-details">
								<label>{data.projectName}</label>
							</div>
						
						</div>
					</div>
					
				);
			});
		}
		return(
			<div className="w3-row">
				{(this.state.toggleData) ?
					<div>
						{displayTeamData}
					</div>:
					<div> 
						{(this.state.displayTeamDataMember) ?
							<TeamComponent data={this.state.teamData} backTeam={this.backTeam} /> :
							null
						}
					</div>
					
				}
			</div>
		);
	}
}

export default class AddTeam extends Component{
	constructor(args) {
		super(args);
		this.state = {
			revealClass: "w3-hide",
			getTeamName: "",
			getProjectName: "",
			teamProjectData: [],
			errorShownTeam: false,
			errorShownProject: false,
			teamAddToggle: true
		};
		this.changeButtonText = this.changeButtonText.bind(this);
		this.showAddTeam = this.showAddTeam.bind(this);
	}

	addTeam() {
		this.setState({
			revealClass: "w3-show"
		});
	}

	closeModal() {
		this.setState({
			revealClass: "w3-hide"
		});
	}

	teamText(e) {
		let teamValue = e.target.value;
		if(teamValue.length > 0) {
			this.setState({
				getTeamName: teamValue
			});
		}
	}

	projectText(e){
		let projectValue = e.target.value;
		if(projectValue.length > 0) {
			this.setState({
				getProjectName: projectValue
			});
		}
	}

	saveData(){
		if(this.state.getTeamName && this.state.getProjectName){
			let teamObjectData = {};
			teamObjectData["id"] = this.state.teamProjectData.length + 0;
			teamObjectData["teamName"] = this.state.getTeamName;
			teamObjectData["projectName"] = this.state.getProjectName;
			this.state.teamProjectData.push(teamObjectData);
			this.setState({
				teamProjectData: this.state.teamProjectData
			}, () => {
				this.setState({
					revealClass: "w3-hide",
					errorShownTeam: false,
					errorShownProject: false
				});
			});
			this.state.getTeamName = "";
			this.state.getProjectName ="";
		}
		else if(!this.state.getTeamName && !this.state.getProjectName){
			this.setState({
				errorShownTeam: true,
				errorShownProject: true
			});
		}
		if(!this.state.getTeamName){
			this.setState({
				errorShownTeam: true
			});
		}
		if(!this.state.getProjectName){
			this.setState({
				errorShownProject: true
			});
		}
	}

	cancelData() {
		this.state.getTeamName = "";
		this.state.getProjectName ="";
		this.setState({
			getTeamName: this.state.getTeamName ,
			getProjectName: this.state.getProjectName 
		});
	}

	changeButtonText(){
		console.log("child function");
		this.setState({
			teamAddToggle: false
		});
	}

	showAddTeam(){
		this.setState({
			teamAddToggle: true
		});
	}
	
	render() {
	    return (
	        <div>
	        	<AppHeader />
	        	
	        	<div className="w3-row">
	        		<div className="w3-container">

	        		{(this.state.teamAddToggle) ?
		        		<button className="w3-black w3-hover-green w3-right button-design" 
		        				onClick={this.addTeam.bind(this)}>
		        		ADD TEAM
		        		</button> :
		        		null
	        		}

	        			<Reveal  openCls={this.state.revealClass}  customHeight="700px">
	        				<div className="w3-row">
	        					<div className="w3-col s12 m10 l8 modal-create">
			        				<div className="w3-row">
			        					<span className="fa fa-close w3-right close-icon" onClick={this.closeModal.bind(this)} />
			        					<p className="w3-center" style={{fontSize: "22px"}}>TEAM AND PROJECT CREATION</p>
			        					<div className="w3-row" style={{paddingTop: "20px"}}>
			        						<label>Team Name</label><br/><br/>
			        						<input type="text" value={this.state.getTeamName} className="textbox-design" placeholder="Team Name" onChange={this.teamText.bind(this)} />
			        						{(this.state.errorShownTeam) ?
			        							<label className="error-warning">TeamName should not be empty</label>:
			        							null
			        						}
			        					</div><br/>
			        					<div className="w3-row">
			        						<label>Project Name</label><br /><br/>
			        						<input type="text" value={this.state.getProjectName} className="textbox-design" placeholder="Project Name" onChange={this.projectText.bind(this)} />
			        						{(this.state.errorShownProject) ?
			        							<label className="error-warning">ProjectName should not be empty</label>:
			        							null
			        						}
			        					</div>
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
	        	<ChildComponent data={this.state.teamProjectData} changeButtonText={this.changeButtonText} showAddTeam={this.showAddTeam} />
	        
	        </div>
	    );
	}

}