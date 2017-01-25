import React from 'react';
import GuitaristsPreview from './GuitaristsPreview';
import guitarists from '../data/guitarists';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="guitarists-selector">
          {guitarists.map(guitaristData => <GuitaristsPreview key={guitaristData.id} {...guitaristData} />)}
        </div>
      </div>
    );
  }
}