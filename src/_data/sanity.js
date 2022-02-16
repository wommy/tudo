const client = require('../utils/sanityClient')

module.exports = async () =>
  await client.fetch(`*[_type=='todo'] | order(_createdAt asc).todo`)
