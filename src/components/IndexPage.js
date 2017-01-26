var React = require("react");
import GuitaristsPreview from './GuitaristsPreview';
import guitarists from '../data/guitarists';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="guitarists-selector">
              {guitarists.map(guitarist => <GuitaristsPreview key={guitarist.id} {...guitarist} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}