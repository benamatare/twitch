import React, { Component } from 'react';
// CSS Style Import
import '../css/app.css'
// Sub Components Import
import Loading from '../../loading/components/loading';
import Graph from '../../graph/components/graph';
// Service Functions Import
import {fetchGameInfo, localizeTimeString, formatViews} from '../services/app.services';

export default class App extends Component {
  // Current state of the app, is that we have to get data by the day and month,
  // not the greatest solution, need to change the endpoints to just give the data we need for the frontend
  // So moving forward the STATE needs to be dumber and the backend needs to be smarter, and more precise endpoints
  
  // Hard code the game that we want to pull as well :-( 
  
  state = {
    // currentDay: new Date().getDay(),
    // currentMonth: new Date().getMonth(),
    currentDay: 3,
    currentMonth: 3,
    loading: false,
    gameName: null,
    gameID: 3,
    gameLogs: {
      timeStamps : null,
      data: null,
    }
  };
  
  
  getTimeValues = gameTimeLogs => {
    // Format the time values, for the graph component
    return gameTimeLogs.map(timeLog => {
      return timeLog.views
    })
  };

  componentDidMount(){
    // Get the data from our API, set time to make the loads take a little longer - for testing the UI/UX of the loading
    // Will remove once we get hosted 
    fetchGameInfo(this.state.gameID,this.state.currentDay, this.state.currentMonth).then( res => {
    setTimeout(() => {
      this.setState({
        loading: !this.state.loading,
        gameID: res[0].id,
        gameName: res[0].name,
        gameLogs: {
          timeStamps: localizeTimeString(res[1]),
          viewCounts:  formatViews(res[1]),
        }
      })
    }, 3000);
   })

  };

  renderGraph = () => {
    // Just renders the graph component, pass in the data that we need as well
    return (
      <div className='graph-parent'>
          <Graph dataset={this.state.gameLogs} name={this.state.gameName}/>
        <h1 className="graph-child-header">  lots of people watching {this.state.gameName.toLowerCase()} </h1>
      </div>
  )};

  render() {
    console.log(this.state)
    return ( 
      <div className="app-parent">
        {/* <Loading /> */}
        {this.state.loading ? this.renderGraph() : <Loading/>}
      </div>
    )};
  };
