
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Main from './components/main';


// const theme = createMuiTheme({
//   overrides: {
//     // Name of the component ⚛️ / style sheet
//     MuiButton: {
//       // Name of the rule
//       root: {
//         // Some CSS
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         borderRadius: 3,
//         border: 0,
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       },
//     },
//   },
// });
  
const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      // '#ede7f6', ff4400
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#ffea00',
      // light: '#0066ff',
      // main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
    contrastThreshold: 5,
    // error: will use the default color
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Main />
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
      