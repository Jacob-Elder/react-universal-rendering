import React from 'react';
import { Link } from 'react-router';

export default class GuitaristsPreview extends React.Component {
	render() {
		return (
				<div className="guitarist-preview col-sm-6">
				<Link to={`/guitarist/${this.props.id}`}>
					<img className="profilePic" src={this.props.image}/>
				</Link>
				</div>
		)
	}
}