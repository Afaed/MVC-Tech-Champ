const rouer = require('express').Router();
const { Comment } = require('.');
const { post } = require ('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    post.findall({})
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

router.post('/', withAuth, (req, res) => {
    if (req.session) {
        post.create({
            postMessage: req.body.postMessage,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    }
})

router.delete('/', withAuth, (req, res) => {
        post.delete({
            where: {
            id: req.params.id
            }
        })
        .then(dbPostData => {
        if (!dbCommentData) {res.status(404).json( { message: 'No comment found with this id' })
    return;
}
res.json(dbPostData);
})
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
    }
);

module.exports = router;