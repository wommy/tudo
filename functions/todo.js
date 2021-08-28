const process = require('process')

const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: process.env.SANITY_PROJECTID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

const handler = async (event) => {
  if (!event.httpMethod === 'POST') {
    return {
      statusCode: 400,
      body: 'unrecognized HTTP Method, only POST allowed',
    }
  }

  const document = {
    _type: 'todo',
    todo: decodeURIComponent( event.body.split("=")[1].replace(/\+/g, ' ') ),
    category: ['inbox'],
    isComplete: false,
  }

  try {
    const result = await client.create(document)
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result),
    }
  } catch (error) {
    return {
      headers: { 'Content-Type': 'application/json' },
      statusCode: 500,
      body: error.responseBody || JSON.stringify({ error: 'An error occurred' }),
    }
  }
}

module.exports = { handler }
