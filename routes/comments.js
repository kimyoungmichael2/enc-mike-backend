const router = require('express').Router();
let Comment = require('../models/comment.model');

router.route('/').get((req, res) => {
    Comment.find()
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const comment = req.body.comment;
    const username = req.body.username;

    const newComment = new Comment({
        comment,
        username,
    });

    newComment.save()
        .then(() => res.json('Comment added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//below routes are probably not going to be used (get specific comment, delete specific comment, update specific comment)
//but I added them anyway; they were in the tutorial I followed so whatever. 

router.route('/:id').get((req, res) => {
    Comment.findById(req.params.id)
        .then(comment => res.json(comment))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Comment.findByIdAndDelete(req.params.id)
        .then(() => res.json('Comment deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Comment.findById(req.params.id)
        .then(comment => {
            comment.comment = req.body.comment;
            comment.username = req.body.username;

            comment.save()
                .then(() => res.json('Comment updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;