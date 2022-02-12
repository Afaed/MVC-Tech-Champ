const rouer = require('express').Router();
const { Comment } = require ('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findall({})
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
            commentText: req.body.comment_test,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    }
})

router.delete('/', withAuth, (req, res) => {
        Comment.delete({
            where: {
            id: req.params.id
            }
        })
        .then(dbCommentData => {
        if (!dbCommentData) {res.status(404).json( { message: 'No comment found with this id' })
    return;
}
res.json(dbCommentData);
})
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
    }
);

module.exports = router;