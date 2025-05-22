exports.getProducts = (req, res, next) => {
  res.json({
    success: true,
    message: 'Get products working!'
  })
}

exports.getsingleProduct = (req, res, next) => {
  res.json({
    success: true,
    message: 'Get single product working!'
  })
}
    