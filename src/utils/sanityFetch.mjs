// import * as dotenv from 'dotenv'
// dotenv.config()
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECTID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2022-02-22',
  token: import.meta.env.VITE_SANITY_TOKEN,
  useCdn: false,
})
  .fetch(`*[_type=='todo'] | order(_createdAt asc).todo`)
  // .then(x => console.log(x))
