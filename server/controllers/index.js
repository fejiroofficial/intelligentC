const Post = require('../models/post');

exports.createPost = (req, res) => {
  const { body: { title } } = req;
  try {
    Post.create({ title })
      .then(post => {
        return res.status(201).json({
          post,
          success: true
        })
      });
  } catch (error) {
    return res.status(201).json({
      error: 'An error occured',
      success: false
    })
  }
};
