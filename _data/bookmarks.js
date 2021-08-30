const process = require('process')
const client = require('@sanity/client')({
  projectId: process.env.SANITY_PROJECTID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: true,
})

module.exports = async ()=> await client
  .fetch(`*[_type=='bookmark'] | order(_createdAt asc)`)

