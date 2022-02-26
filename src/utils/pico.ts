import picoSanity from "picosanity"

export default picoSanity({
  projectId: import.meta.env.VITE_SANITY_PROJECTID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2022-02-22',
  useCdn: false,
}).fetch(`*[_type=='todo'] | order(_createdAt desc).todo`)
