import React from 'react';
import PlayList from './components/playList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: '#961bb0'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div>
          <PlayList />
        </div>
    </div>
  );
}

export default App;
