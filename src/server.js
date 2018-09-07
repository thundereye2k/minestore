const app = require('express')();
const port = app.set('port', require('./config.json').port || 3000);



app.listen(port, () => console.info(`Listeing on port ${port}`));