const validateBody = (request, response) => {
  const {body} = request.body;

  if (body.title === undefined) {
    response.status(400).json({message: 'The field "title" is required'});
  }

  if (body.title === '') {
    response.status(400).json({message: 'title cannot be empty'});
  }

  next();
};

module.exports = {
  validateBody
};