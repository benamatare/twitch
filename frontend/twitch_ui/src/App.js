import React, { Component } from 'react';
import '../src/css/master/app.css'

import Graph from './components/graph/graph';
import Loading from './components/loading/loading';

export default class App extends Component {
  state = {
    currentDay: new Date().getDay(),
    currentMonth: new Date().getMonth(),
    // currentDay: 3,
    // currentMonth: 3,
    loading: false,
    gameName: null,
    gameID: 3,
    gameLogs: {
      timeStamps : null,
      data: null,
    }
  };
  
  getGameData = () => {
    // Get a Game MetaData
    return fetch(`http://localhost:8000/api/game/${this.state.gameID}`).then(res => res.json())
  };
  
  getGameLogs = () => {
    // Get the Logs for a Game; (seperate endpoint)
    return fetch(`http://localhost:8000/api/game/${this.state.gameID}/logs`).then(res => res.json())
      .then(json => { return json.filter(gameTimeLog => {
        // Filter out the gameTimeLogs that do NOT match the current Month & Day
        return new Date(gameTimeLog.logged_at).getMonth() === this.state.currentMonth && new Date(gameTimeLog.logged_at).getDay() === this.state.currentDay
      })
    })
  };
  
  waitForFetchCallsToResolve = () => {
    return Promise.all([ 
      this.getGameData(), 
      this.getGameLogs() 
    ])
  };


  getTimeStamps = gameTimeLogs => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12 : true,
    };
      return gameTimeLogs.map(timeLog =>  {
        return new Date(timeLog.logged_at).toLocaleDateString('en-us', options).slice(10,20).trim().toLowerCase()
    })
  };
  
  getTimeValues = gameTimeLogs => {
    return gameTimeLogs.map(timeLog => {
      return timeLog.views
    })
  };

  componentDidMount(){
    this.waitForFetchCallsToResolve().then(res => {
      setTimeout(() => {
        this.setState({
          loading: !this.state.loading,
          gameID: res[0].id,
          gameName: res[0].name,
          gameLogs: {
            timeStamps: this.getTimeStamps(res[1]),
            viewCounts:  this.getTimeValues(res[1]),
          }
        })
      }, 10);
    })
  };

  renderGraph = () => {
    // Move rendering return to a function to simplify Component render page
    return (
      <div className='graph-parent'>
          <Graph dataset={this.state.gameLogs} name={this.state.gameName}/>
        <h1 className="graph-child-header">  lots of people watching {this.state.gameName.toLowerCase()} </h1>
      </div>
  )};


  render() {
    return ( 
      <div className="app-parent">
        {/* <Loading /> */}
        {this.state.loading ? this.renderGraph() : <Loading/>}
      </div>
    )};
  };
