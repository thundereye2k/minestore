const app = require('express')();
const port = app.set('port', require('./config.json').port || 3000);

app.set('view engine', 'ejs');
app.use(require('helmet')());
app.use(require('express').static('assets'))

app.listen(port, () => console.info(`Listeing on port ${port}`));