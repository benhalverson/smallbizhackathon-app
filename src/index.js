
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Main from './components/main';



const theme = createMuiTheme();

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Main />
    </MuiThemeProvider>
  );
}

ReactDOM.render(<Main />, document.querySelector('#root'));
      