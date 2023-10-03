// Import the necessary components
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import Calculator from './Calculator';
import theme from './theme'; // Import your Material-UI theme

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>My Calculator App</h1>
        <Calculator />
      </div>
    </ThemeProvider>
  );
};

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});