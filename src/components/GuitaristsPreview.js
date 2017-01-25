import React from 'react';
import { Link } from 'react-router';

export default class GuitaristsPreview extends React.Component {
	render() {
		return (
				<div className="guitarist-preview">
					<img src={'img/${this.props.img}'}/>
				</div>
		)
	}
}