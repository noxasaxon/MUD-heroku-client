import React, { Component } from 'react';

import axios from 'axios'
import hkurl from '../../helpers/scripts'
import {Link} from 'react-router-dom'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button, Card, CardContent, CardHeader, Typography} from '@material-ui/core/';
import Console from '../Console'
import '../../styles/home.css'

const styles = theme => ({
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  commandInput: {

   },
  button: {
     margin: theme.spacing.unit,
   },
   input: {
     display: 'none',

   },
   form:{
      display: 'flex',
      // flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#0D0208',
      marginLeft: '15px',
      borderRadius: '4px'
      // alignItems: 'center'
   },
});


class Home extends Component {
  //pass log to Console, maxLogSize is changed depending on media query
  //command is given by user and sent to server
  //players is used for sidebar or room inventory?
  constructor(){
    super()
    this.state = {
      name: '',
      log: [],
      lastResponse: ``,
      command: '',
      maxLogSize: 10,
      uuid: '',
      players:[],
    }
  }

  componentDidMount = () => {
   /* props.init = axios /init response.data: 
        {"uuid": "c3ee7f04-5137-427e-8591-7fcf0557dd7b",
        "name": "testuser", "title": "Outside Cave Entrance",
        "description": "North of you, the cave mount beckons", "players": []} */
    if(this.props && this.props.init){
      //props exist, set state
      const init = this.props.init
      //stringify room data into a template literal for log to console
      let roomInfo = `${init.title}
      ${init.description}`

      this.setState({uuid: init.uuid, name: init.name, players: init.players, log: [roomInfo]})

    //Upon login, subscribe to a Pusher channel based on the player's universally unique id: p-channel-<uuid>
  
    //Bind the player channel to broadcast events and display the messages to the player
    }
  };//endCDM

  componentDidUpdate(prevProps){

  }

  tryCommand = (command) => {

  }

  parseResponse = (response) => {

  }

  say(){

  }

  addText = (string) => {
    // let newLog = this.state.log + this.state.lastOutput
    const newLog = this.state.log
    let newText = `- - - - - - - - - - - - -
    ${string}`
    newLog.append(this.state.lastOutput)
    // const lines = (newLog.match(/\r?\n/g) || '').length + 1
    if (newLog.length > 3) {
       //if the log is full, delete the oldest command
       newLog.shift()
    }
    this.setState({log: newLog, lastOutput: newText})
 }


  handleChange = name => event => {
    this.setState({
       [name]: event.target.value,
     });
 }

  render() {
    const { classes } = this.props;
    return (
      <div className="Home">
      {/* <Typography variant="headline">Current Room: {this.state.room.name}</Typography> */}
      <Console log={this.state.log} lastOutput={this.state.lastOutput}>
      <form onSubmit={this.enterCommand} className={classNames(classes.container, classes.form)} noValidate autoComplete="off">
      <input id="commandInput" placeholder="Enter command"
                     name="commandInput"
                     value={this.state.command}
                     onChange={this.handleChange('command')}
                     className={classes.commandInput} />
        <Button variant="contained" color="primary" className={classes.button} type="submit"> Submit Command </Button>
      </form>
      </Console>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
