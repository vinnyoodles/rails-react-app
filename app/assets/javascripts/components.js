require('');
// Component::Manifest
import App       from './react/app.js';

const app = window.app = global.app = {};

// Expose components to global scope
app.App = App;
