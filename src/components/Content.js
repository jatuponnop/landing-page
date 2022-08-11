import React from 'react'
import "./Content.css"

function Content() {
  return (
    <div className='container'>
      <section className='content-con'>
        <div className="content-l">
          <img src='https://images.unsplash.com/photo-1516101922849-2bf0be616449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80' alt='' />
        </div>
        <div className="content-r">
          <h2>Some Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt, ullam saepe eos omnis qui iusto quo officia aliquid? Sunt dicta assumenda provident sequi sint id quo libero quas odit.</p>
        </div>
      </section>
      <section className='content-con'>
        <div className="content-r">
          <h2>Some Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt, ullam saepe eos omnis qui iusto quo officia aliquid? Sunt dicta assumenda provident sequi sint id quo libero quas odit.</p>
        </div>
        <div className="content-l">
          <img src='https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='' />
        </div>
      </section>
      <section className='content-con'>
        <div className="content-l">
          <img src='https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='' />
        </div>
        <div className="content-r">
          <h2>Some Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt, ullam saepe eos omnis qui iusto quo officia aliquid? Sunt dicta assumenda provident sequi sint id quo libero quas odit.</p>
        </div>
      </section>

    </div>
  )
}

export default Content