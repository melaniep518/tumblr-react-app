var React = require('react');
var ReactDOM = require('react-dom');

import {TumblrPosts} from './form';
import {List} from './todolist';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Let's get shit done!</h1>
        <TumblrPosts />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export {App};