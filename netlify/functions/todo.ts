import { Handler } from '@netlify/functions'
import client from '../sanityClient'

const handler: Handler = async event => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 400,
      body: 'unrecognized HTTP Method, only POST allowed',
    }
  }

  const document = {
    _type: 'todo',
    todo: decodeURIComponent(
      event.body.split('=')[1].replace(/\+/g, ' ').trim(),
    ),
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
      body:
        error.responseBody || JSON.stringify({ error: 'An error occurred' }),
    }
  }
}

export { handler }
