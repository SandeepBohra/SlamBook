import React, { Component } from 'react';
import {ImageComponent} from './components/imageComponent';
import {GoogleComponent} from './components/googleComponent';
import {Login} from './components/newGoogleComponent';
import {MovieComponent} from './components/movieComponent';
import Request from 'superagent';
import logo from './logo.svg';
import './App.css';
import AddData from './components/AddData';

class App extends Component {
  constructor(){
    super();
    //this.addData.bind(this);
    this.state = {addData:false};
    this.onClickSubmit = this.onClickSubmit.bind(this)
  }
  componentWillMount(){
    var url = "//offline-news-api.herokuapp.com/stories";
    Request.get(url).then((response) =>{
        console.log(response);
        this.setState({
            list: response.body,
        });
    });
}
componentDidMount() {
    
}
componentWillUpdate(nextProps, nextState) {
    
}
componentWillUnmount(){

}
addData(){
  this.setState({
    addData: true
  })
}
onClickSubmit(list1) {
  var newList = this.state.list;
  newList.push(list1);
  this.setState({
    list : newList
  })
  
  console.log('value')
 // this.setState({data: e.target.value});
}

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.addData.bind(this)}>Add +</button>
        <MovieComponent list= {this.state.list} />
        {this.state.addData ?<AddData submitVal={this.onClickSubmit}/>:null}
      </div>
    );
  }
}
export default App;

/**
 * This component has to be container/stateful componnet
 * Consist of entire logic
 * api calls , add , delete, update
 * 
 * steps-- 
 * 0- basic setup with view
 * 1- container and dumb componnets
 *  --api calls , add , delete, update, logic(container)
 *  -- view -- dumb componet
 * 
 * 2- local storage integration of state such data persists
 * 
 * 3- create a new page( container )-- route, roting info -- react-router(4)
 * 
 * 4- Redux integration for state persistance
 * 
 * --less imp--
 * 
 * 5- Creating our own server and serving api's 
 * 
 * 6- Creating our own Database structure
 */
