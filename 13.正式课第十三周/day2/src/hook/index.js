import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import A from './A';
// import B from './B';
// import Parent from './Parent';

ReactDOM.render(
	<A></A>
	// {/* <B></B> */}
	// {/* <Parent/> */}
, document.getElementById('root'));