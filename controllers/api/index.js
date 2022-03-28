const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');
const bookreviewRoutes = require('./bookreviewRoutes');

router.use('/users', userRoutes);
router.use('/book', bookRoutes);
router.use('/bookreview', bookreviewRoutes);

module.exports = router;
