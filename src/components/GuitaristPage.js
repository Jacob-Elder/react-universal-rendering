import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import AthletesMenu from './GuitaristsMenu';
import athletes from '../data/guitarists';

export default class GuitaristPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const guitarist = guitarists.filter((guitarist) => guitarist.id === id)[0];
    if (!guitarist) {
      return <NotFoundPage/>;
    }
    return (
      <div className="guitarist-full">
        <AthletesMenu/>
        <div className="guitarist">
          <header/>
          <div className="picture-container">
            <img src={`/img/${guitarist.image}`}/>
            <h2 className="name">{guitarist.name}</h2>
          </div>
          <section className="description">
            {guitarist.description}
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/"> Back to the index</Link>
        </div>
      </div>
    );
  }
}