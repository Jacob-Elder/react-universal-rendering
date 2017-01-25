import React from 'react';
import { Link } from 'react-router';
import guitarists from '../data/guitarists.js';

export default class GuitaristsMenu extends React.Component {
	render(){
		return (
			<nav className="guitarists-menu">
				{guitarists.map(menuGuitarist => {
					return <Link key={menuGuitarist.id} to={'/guitarist/${menuGuitarist.id}'} activeClassName="active"> {menuGuitarist.name} </Link>
				})}
			</nav>
		)
	}
}