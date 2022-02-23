import * as dotenv from 'dotenv'
dotenv.config()
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.SANITY_PROJECTID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2022-02-22',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})
