import React from 'react'
import '../../theme/_style.scss'

export default function Tools() {
  return (
    <>
      <section className="tools two-col">
        <h2>
          <span className="line">
            <span className="line-inner">title</span>
          </span>
          <span className="line">
            <span className="line-inner">&amp; message</span>
          </span>
        </h2>

        <div className="content scroll-stagger">
          <span>Text here</span>
        </div>
      </section>
    </>
  )
}
