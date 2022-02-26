import picoSanity from "picosanity"

// https://sanity-codegen-dev.vercel.app/
type Query = (string | null)[]

export default picoSanity({
  projectId: import.meta.env.VITE_SANITY_PROJECTID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2022-02-22',
  useCdn: false,
}).fetch<Query>(`*[_type=='todo'] | order(_createdAt desc).todo`)
