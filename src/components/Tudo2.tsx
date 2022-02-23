import 'twin.macro'
import '../styles/Stack.css'
import { useState, useEffect } from 'react'
import sanityFetch from '../utils/sanityFetch.mjs'

const Tudo = () => {

  const [tudos, setTudos] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    sanityFetch.then(x=>setTudos(x))
    .then( x => setLoading(false) ) 
  },[])
  console.log(tudos)

  return (
    <main tw='grid place-content-center gap-8 mt-8'>
      { !loading && tudos.reverse().map( (tudo, i) => <p key={i}>{tudo}</p>)}
    </main>
  )
}

export default Tudo
