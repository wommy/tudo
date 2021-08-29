import client from '../utils/sanityClient'

const handler = async (event) => {
  if (!event.httpMethod === 'POST') {
    return {
      statusCode: 400,
      body: 'unrecognized HTTP Method, only POST allowed',
    }
  }

  const s0 = event.body
  console.log(s0)

  const s1 = s0.split("&")
  console.log(s1)

  // const s2a = s1[0].split("=")[1].replace(/\+/g, ' ').trim()
  // console.log(s2a)
  // const s2b = s1[1].split("=")[1].replace(/\+/g, ' ').trim()
  // console.log(s2b)

  // const sa2 = s1.map( x =>  x.split("=")[1].replace(/\+/g, ' ').trim() )
  // console.log(sa2)

  const saa2 = s1.map( x =>  x.split("=") )
  console.log(saa2)

  const saa3 = Object.fromEntries(saa2)
  console.log(saa3)

  let { url, title } = Object.fromEntries(saa2)
    // .forEach( x => console.log( decodeURIComponent(x).split("=").slice(1).join("=").replace(/\+/g, ' ').trim() ) )
    // todo: decodeURIComponent( event.body.split("=")[1].replace(/\+/g, ' ').trim() ),

  const document = {
    _type: 'bookmark',
    category: ['inbox'],
    url: decodeURIComponent( url ),
    title: decodeURIComponent( title.replace(/\+/g, ' ') ),
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
