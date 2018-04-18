const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

import {App} from './App';
import {List} from './todolist';

class TumblrPosts extends React.Component {
  getPosts() {
    axios.get('https://api.tumblr.com/v2/tagged?tag=gif&api_key=bApxxUhc9hHCapb77DEJlGiYOsPG3hZ0OwM8EEtbAKrKmPY0Xv')
      .then(response => {
        console.log(response)
      })
  }

  render() {
    this.getPosts()
  }
}

export {TumblrPosts};
