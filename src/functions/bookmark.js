import client from '../utils/sanityClient.mjs'

const handler = async event => {
  if (!event.httpMethod === 'POST') {
    return {
      statusCode: 400,
      body: 'unrecognized HTTP Method, only POST allowed',
    }
  }

  const { url, title } = Object.fromEntries(
    event.rawQuery.split('&').map(x => x.split('=')),
  )

  const document = {
    _type: 'bookmark',
    category: ['inbox'],
    title: decodeURIComponent(title),
    url: decodeURIComponent(url),
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
