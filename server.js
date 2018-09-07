const app = require('express')();
app.set('port', require('./config.json').port || 3000);
require('./router')(app);

const port = app.get('port') || 3000;
app.set('view engine', 'ejs');
app.use(require('helmet')());
let path = require('path').join(__dirname + '/assets'); console.log(path)
app.use(require('express').static(path));

app.listen(port, () => console.info(`Listeing on port ${port}`));