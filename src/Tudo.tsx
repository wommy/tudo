import { Component, createResource, For, Suspense } from 'solid-js'
import fetchTudos from './utils/pico'

const Tudo: Component = () => {
  const [tudos] = createResource(async () => fetchTudos)
  return (
    <main class='grid place-content-center gap-8 mt-8'>
      <header class='text-center'>
        <h1>tudo</h1>
      </header>

      <form
        action={import.meta.env.VITE_POST_URL}
        method='post'
        class='flex gap-1'
      >
        <label>
          <input name='todo' placeholder='todo' required />
        </label>

        <button type='submit'>Submit</button>
      </form>

      <Suspense fallback={<p>loadin..</p>}>
        <ol className='stack' reversed>
          <For each={tudos()}>{tudo => <li>{tudo}</li>}</For>
        </ol>
      </Suspense>
    </main>
  )
}

export default Tudo
