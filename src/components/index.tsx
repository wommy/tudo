import { Component, createResource, For, Show, Suspense } from 'solid-js'
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
  const [tudos] = createResource(async () => await sanityFetch)
  return (
    <ol className='stack' reversed>
      <Suspense fallback={<p>loadin..</p>}>
        <Show when={tudos()}>
          <For each={tudos().reverse()}>{tudo => 
            <li>{tudo as string}</li>
          }</For>
        </Show>
      </Suspense>
    </ol>
  )
}
