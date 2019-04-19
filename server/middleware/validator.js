exports.validateInput = (req, res, next) => {
  const { body: { title } } = req;
  console.log(req.body)
  if(!title) {
    return res.status(422).json({
      success: false,
      error: 'Title is required.'
    });
  } else if (title.length < 3) {
    return res.status(422).json({
      success: false,
      error: 'Title should be at least 3 characters.'
    });
  }
  req.body.title = title.trim();
  return next();
};
