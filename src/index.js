import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import {createMuiTheme, responsiveFontSizes} from "@material-ui/core";
import {red} from "@material-ui/core/colors";
import {ThemeProvider} from "@material-ui/styles";

import DropSite from "./sites/DropSite";


let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#37BC7A'
        },
        secondary:{
            main: '#7B7B7B'
        },
        error: red
    }
});
theme = responsiveFontSizes(theme);

ReactDOM.render(<ThemeProvider theme={theme} children={DropSite}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
