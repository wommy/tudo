import client from '../utils/sanityClient'

const handler = async (event) => {
  if (!event.httpMethod === 'POST') {
    return {
      statusCode: 400,
      body: 'unrecognized HTTP Method, only POST allowed',
    }
  }
  
  const result = 'url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DF6Wfy9Ro4s4&title=How%20to%20be%20an%20actual%20god%20on%20Pudge%20-%20YouTube'

  let { url, title } = Object.fromEntries(event.body.split("&").map( x =>  x.split("=") ))

  const document = {
    _type: 'bookmark',
    category: ['inbox'],
    title: decodeURIComponent( title ),
    url: decodeURIComponent( url ),
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
