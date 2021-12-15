const { createStore } = require('./utils/store');
const app = require('./app');

const PORT = process.env.PORT || 4000;
const db = createStore();

db.sync().then(app.listen(PORT));
