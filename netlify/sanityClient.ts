import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECTID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  token: import.meta.env.VITE_SANITY_TOKEN,
  apiVersion: '2022-02-22',
  useCdn: false,
}).fetch(`*[_type=='todo'] | order(_createdAt desc).todo`)
