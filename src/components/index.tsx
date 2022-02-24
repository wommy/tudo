import { Component, createSignal, For, onMount } from 'solid-js'
import sanityFetch from '../utils/sanityFetch'

export const Header: Component = () => {
  return (
    <header class='text-center'>
      <h1>tudo</h1>
    </header>
  )
}

export const Form: Component = () => {
  return (
    <form
      action='https://todo-tm.netlify.app/api/todo/'
      method='post'
      class='flex gap-1'
    >
      <label>
        <input name='todo' placeholder='todo' required />
      </label>

      <button type='submit'>Submit</button>
    </form>
  )
}

export const TudoList: Component = () => {
  const [tudos, setTudos] = createSignal([])
  onMount(async () => {
    setTudos(await sanityFetch)
  })
  return (
    <ol className='stack' reversed>
      <For each={tudos().reverse()} fallback={<p>loadin..</p>}>{tudo => 
        <li>{tudo}</li>
      }</For>
    </ol>
  )
}
