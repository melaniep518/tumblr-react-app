// clear input value after every submit
// write function to strikethrough list item and move it down when that item is clicked

const React = require('react');

import {App} from './App';
import {Form} from './form';

const List = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          {console.log(this.props.list)}
           {this.props.list.map(function(currIt, i) {
            return (
              <li key={"item_" + i}>{currIt}</li>
            )
           })
          }
        </ul>
      </div>
    )
  }
})

export {List} ;

  // makeList: function() {
  //   this.state.todos.map(function(currIt, i) {
  //     console.log('hello')
  //     return (
  //       <li key={"item_" + i}>{currIt}</li> 
  //     )
  //   })
  // },