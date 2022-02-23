import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import { Form, Header, TudoList } from './components'

const Tudo: Component = () => {
  const [data, setData] = createSignal(null)
  const [ready, setReady] = createSignal(false)

  return (
    <main class='grid place-content-center gap-8 mt-8'>
      <Header />
      <Form />
      <TudoList />
    </main>
  )
}

export default Tudo
