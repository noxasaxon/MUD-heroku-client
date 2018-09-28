import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: '#0D0208',
    minHeight: `300px;`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  wrapper: {
   margin: '20px',
  },
  header: {
   textDecoration: 'underline',
   marginBottom: 'auto'
  },
  text: {
   // color: ' #008F11'
   color: '#00FF41',
   whiteSpace:'pre-wrap;'
  }
});

class Console extends Component {
   constructor(){
      super()
   }

   render(){
      const { classes } = this.props;

      return (
         <div className={classes.wrapper}>
            <Paper className={classes.paper} elevation={1}>
            <Typography className={classNames(classes.header , classes.text)} variant="headline" component="h3">
               Lambda MUD
            </Typography>
            <div>
               {this.props.log && this.props.log.map(textScript => 
                  <Typography  className={classes.text} >
                    {textScript}
                  </Typography>
               )}
                {this.props.lastOutput &&
                <Typography className={classes.text} component="p" >
                  {this.props.lastOutput}
                </Typography>}


            {this.props.children}
            </div>
            </Paper>
         </div>
      );
   }
}


export default withStyles(styles)(Console);