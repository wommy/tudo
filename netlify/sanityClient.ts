import 'dotenv/config'
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.VITE_SANITY_PROJECTID,
  dataset: process.env.VITE_SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  apiVersion: '2022-02-22',
  useCdn: false,
})
