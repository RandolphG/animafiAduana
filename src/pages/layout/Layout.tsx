import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// @ts-ignore
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

import '../../theme/_style.scss'
import Cursor from './Cursor'
import { Home } from '../home'
import Loading from './Loading'
import Navbar from './Navbar'
import Footer from './Footer'

gsap.registerPlugin(ScrollTrigger)

// @ts-ignore
export default function Layout({ children, location }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    let locoScroll: any
    /* eslint-disable */
    locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: false,
    })
    /* eslint-enable */

    locoScroll.on('scroll', ScrollTrigger.update)

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      }, // @ts-ignore
      pinType: scrollRef.current.style.transform ? 'transform' : 'fixed',
    })

    // Reveal on scroll animations
    // h2 reveal
    if (document.querySelector('h2')) {
      const allh2s = document.querySelectorAll('h2')
      const h2LineHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--h2')
      )

      allh2s.forEach((elem) => {
        const h2Lines = elem.querySelectorAll('.line-inner')

        gsap.fromTo(
          h2Lines,
          {
            y: `${h2LineHeight * 11.5}`,
          },
          {
            y: 0,
            stagger: 0.12,
            duration: 1,
            ease: 'power3.out',

            scrollTrigger: {
              trigger: elem,
              start: '0 75%',
              scroller: scrollRef.current,
            },
          }
        )
      })
    }

    // image reveal, note: you have to add .overlay class in the css of img
    if (document.querySelector('.image-reveal')) {
      const allThumbnails = document.querySelectorAll('.image-reveal')

      allThumbnails.forEach((elem) => {
        const innerImg = elem.querySelector('picture img')
        elem.insertAdjacentHTML('beforeend', `<div class="overlay"></div>`)
        const overlay = elem.querySelector('.overlay')

        gsap.to(overlay, {
          duration: 1.2,
          height: 0,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: elem,
            start: '0 75%',
            scroller: scrollRef.current,
          },
        })
        gsap.from(innerImg, {
          duration: 1.2,
          scale: 1.3,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: elem,
            start: '0 75%',
            scroller: scrollRef.current,
          },
        })
      })
    }

    // Elements reveal: text
    if (document.querySelector('.text-reveal')) {
      const scrollText = document.querySelectorAll('.text-reveal')

      scrollText.forEach((singleText) => {
        gsap.from(singleText, {
          duration: 0.8,
          y: 50,
          opacity: 0,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: singleText,
            start: '100px bottom',
            scroller: scrollRef.current,
          },
        })
      })
    }

    // Elements reveal: stagger
    if (document.querySelector('.scroll-stagger')) {
      const scrollStagger = document.querySelectorAll('.scroll-stagger')

      scrollStagger.forEach((staggerParent) => {
        const allChild = staggerParent.children

        gsap.from(allChild, {
          duration: 0.8,
          y: 50,
          opacity: 0,
          ease: 'power3.out',
          stagger: 0.1,

          scrollTrigger: {
            trigger: staggerParent,
            start: '100px bottom',
            scroller: scrollRef.current,
          },
        })
      })
    }

    ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
    ScrollTrigger.refresh()

    return () => {
      if (locoScroll) locoScroll.destroy()
    }
  }, [location])

  return (
    <>
      <Cursor location={location} />
      {/*<Loading />*/}

      <div ref={scrollRef} data-scroll-container>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  )
}
