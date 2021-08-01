const { Post } = require('../models');

const postData = [{
        title: 'Family',
        content: 'Family, a group of persons united by the ties of marriage, blood, or adoption, constituting a single household and interacting with each other in their respective social positions, usually those of spouses, parents, children, and siblings',
        user_id: 1

    },
    {
        title: 'love',
        content: 'Love is an intense, deep affection for another person. Love also means to feel this intense affection for someone. Love can also refer to a strong like for something or to like something a lot. ',
        user_id: 2
    },
    {
        title: 'affection',
        content: 'Affection is   a gentle feeling of fondness, caring or liking. It is a moderate feeling or emotion compared to love. Unlike love, affection does not consist of passionate or romantic feelings. ',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;