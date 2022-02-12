const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes.js');
const router = require ('express').Router();

router.use('/post', postRoutes);
router.use('/comment', commentRoutes);
router.use('/user', userRoutes);

module.exports = router;