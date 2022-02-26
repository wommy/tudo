const client = require('../../utils/sanityClient')

module.exports = async () =>
  await client.fetch(`*[_type=='bookmark'] | order(_createdAt asc)`)
