import type { Component } from 'solid-js'

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
  return (
    <ol className='stack' reversed>
      <li>
        FORK twind CUBE ,
        https://github.com/tw-in-js/twind/tree/next/packages/cdn#usage
      </li>
      <li>
        degit , pull in blog entries ,
        https://www.zachleat.com/web/zachleat-on-netlify/
      </li>
      <li>read , https://antfu.me/posts/rewrite-in-vite</li>
      <li>
        super details for mobile nav ,
        https://www.zachleat.com/web/details-utils/
      </li>
      <li>cont , https://github.com/jesperorb/json-server-heroku</li>
      <li>juggle two herokus , https://kaffeine.herokuapp.com/</li>
      <li>tudo , sanity</li>
      <li>https://vite-plugin-pwa.netlify.app/</li>
      <li>https://antfu.me/notes</li>
      <li>
        todoTm , redirect , use alpine to hydrate , maybe set timer to rerun
        build?
      </li>
      <li>todoTm , filters: byDate</li>
      <li>todoTm , 2nd field: category</li>
      <li>todoTm header: back to wommy</li>
      <li>todoTm move submit to bottom</li>
      <li>lazy susan</li>
      <li>xactor</li>
      <li>chrome extension</li>
      <li>amazon patio door</li>
      <li>graphql event sourcing</li>
      <li>wireguard</li>
      <li>newsletter</li>
      <li>submodule</li>
      <li>software</li>
      <li>aliash</li>
      <li>taskwarrior</li>
      <li>termux</li>
      <li>task ui</li>
      <li>picom</li>
      <li>vim scroll</li>
      <li>website font</li>
      <li>microcentre | bluray burner</li>
      <li>movie (fromJack) The Bank 2001</li>
      <li>
        kitchen tools: milk frother, mandolin w/ julienne, wire spider, food
        thermometer
      </li>
      <li>tideland Jeff bridges</li>
      <li>Fisher king Jeff bridges</li>
      <li>ytd-channel-name</li>
      <li>microplane</li>
      <li>wooden spoons</li>
      <li>quart containers</li>
      <li>carbon steel skillet</li>
      <li>pedestal and mortar</li>
      <li>dillon | next forms , sanity</li>
      <li>kanban | mike / dana</li>
      <li>changeup /api/todo</li>
      <li>citronella candle</li>
    </ol>
  )
}
