import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Layout from './src/Views/Layout/Layout.jsx';
import './src/Styles/main.sass';
import {generateRandomArray} from './src/Libs/tempData';

const appContainer = document.getElementById('app-container');



const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Layout defaultData={generateRandomArray(60)}/>
  </MuiThemeProvider>
);

ReactDOM.render(<App/>, appContainer);
