
const input = '?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DF6Wfy9Ro4s4&title=How%20to%20be%20an%20actual%20god%20on%20Pudge%20-%20YouTube'
  .split("?")[1]
  .split("&")
  .map( x => x.split("=") )

const { url, title } = Object.fromEntries(input)

console.log(decodeURIComponent(url))
console.log(decodeURIComponent(title))

// let { url, title } = Object.fromEntries(event.body.split("&").map( x =>  x.split("=") ))

// const document = {
//   _type: 'bookmark',
//   category: ['inbox'],
//   title: decodeURIComponent( title ),
//   url: decodeURIComponent( url ),
// }

// console.log(document)
