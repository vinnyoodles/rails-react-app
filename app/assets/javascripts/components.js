require('');
// Component::Manifest
import Sidebar       from './react/sidebar/sidebar.js';
import Table         from './react/table/table.js';

const app = window.app = global.app = {};

// Expose components to global scope
app.Sidebar = Sidebar;
app.Table = Table;
