import React, { Component } from "react";

export default class Reveal extends Component {
	render() {
    	let customStyle = {};

		if (this.props.customWidth || this.props.customHeight) {
			customStyle = {
				width: this.props.customWidth,
				height: this.props.customHeight
			};
		}

		if (this.props.customStyle) {
			Object.assign(customStyle, this.props.customStyle);
		}

		return (
			<div className={"w3-modal  " + this.props.openCls}>
				<div className={("w3-modal-content", (this.props.customClass)? this.props.customClass : "")} 
					style={customStyle}>
					{this.props.children}
				</div>
			</div>
		);
	}
}
