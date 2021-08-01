const { Comment } = require('../models');

const commentData = [{
        comment_text: "People call me Ayo 21 ",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "How Do you do? ",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "I'm Nigerian living in canada .",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;