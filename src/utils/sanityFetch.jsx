import { fetch } from '../../utils/sanityClient'

export default async () =>
  await fetch(`*[_type=='todo'] | order(_createdAt asc).todo`)
