const process = require('process')

module.exports = async ()=> await require('@sanity/client')({
  projectId: process.env.SANITY_PROJECTID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: false,
}).fetch(`*[_type=='todo'] | order(_createdAt asc).todo`)

