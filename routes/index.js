const router = require('express').Router();

router.get('/', async (req, res) => {
    res.status(200).render('index', {
        store: res.locals.store,
        pageTitle: 'Welcome',
    });
});

module.exports = router;