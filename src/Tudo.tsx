import { Component, createResource, For, Show, Suspense } from 'solid-js'
import sanityFetch from './utils/sanityFetch'

const Tudo: Component = () => {
  const [tudos] = createResource(async () => await sanityFetch)
  return (
    <main class='grid place-content-center gap-8 mt-8'>
      
      {/* simple header */}
      <header class='text-center'>
        <h1>tudo</h1>
      </header>

			{/* form */}
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

      {/* generate List && Items */}
      <ol className='stack' reversed>
        <Suspense fallback={<p>loadin..</p>}>
          <Show when={tudos()}>
            <For each={tudos().reverse()}>{tudo => 
              <li>{tudo as string}</li>
            }</For>
          </Show>
        </Suspense>
      </ol>
    </main>
  )
}

export default Tudo
