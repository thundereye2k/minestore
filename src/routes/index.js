const router = require('express').Router();

router.get('/', async (req, res) => {
    res.status(200).render('index', {
        store: res.locals.store,
    });
});

module.exports = router;