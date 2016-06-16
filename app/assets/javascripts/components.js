require('');
// Component::Manifest
import Sidebar       from './react/sidebar/sidebar.es6.js';
import Table         from './react/table/table.es6.js';

const app = window.app = global.app = {};

// Expose components to global scope
app.Sidebar = Sidebar;
app.Table = Table;
