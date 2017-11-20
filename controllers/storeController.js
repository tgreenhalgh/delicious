exports.myMiddleware = (req, res, next) => {
  req.name = 'Thomas';
  if (req.name === 'Thomas') {
    throw Error('Whoa, what a name: ' + req.name);
  }
  next();
};

exports.homePage = (req, res) => {
  res.render('index');
  console.log('req.name', req.name);
};
