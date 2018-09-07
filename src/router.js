module.exports = (app) => {
    app.use((req, res, next) => {
        res.locals.store = require('./store.json') || null
        
        next();
    });

    app.use('/', require('./routes/index'));

    app.use((req, res, next) => {
        res.status(404).send('404: Content not found, and/or unavailable at this time.');
    });
}