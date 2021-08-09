export function onLoadAnims(timeline, h4 = false, p = false) {
  const h1LinesHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--h1'),
    10
  )
  const loadingScale = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--loading-scale')

  /* eslint-disable */
  timeline.to('.reveal-bg .loading', {
    duration: 0.6,
    animation: 'none',
    scale: loadingScale,
    ease: 'power3.inOut',
  })

  timeline.to('.reveal-bg', {
    duration: 0.6,
    opacity: 0,
  })

  timeline.to('.reveal-bg', {
    duration: 0,
    visibility: 'hidden',
  })

  timeline.to('.reveal-bg .loading', {
    duration: 0,
    scale: 1,
  })

  timeline.from(
    ['.navbar .logo', '.navbar .main-menu', '.navbar .menu-btn'],
    {
      duration: 1.2,
      y: -80,
      opacity: 0,
      ease: 'power3.out',
    },
    '-=0.4'
  )

  if (h4) {
    timeline.from(
      '.hero h4',
      {
        duration: 0.6,
        y: 40,
        opacity: 0,
        ease: 'power3.out',
      },
      '-=0.8'
    )
  }

  timeline.from(
    '.hero .line-inner',
    {
      duration: 1,
      y: `${h1LinesHeight * 11.5}`,
      stagger: 0.15,
      ease: 'power3.out',
    },
    '-=0.8'
  )

  if (p) {
    timeline.from(
      '.intro p',
      {
        duration: 0.6,
        y: 40,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1,
      },
      '-=0.6'
    )
  }
  /* eslint-enable */
}

export function resetLoader() {
  const revealBg = document.querySelector('.reveal-bg')
  const revealBgLoading = document.querySelector('.reveal-bg .loading')
  revealBg.style.opacity = '1'
  revealBg.style.visibility = 'visible'
  revealBgLoading.style.transform = 'scale(1)'
  revealBgLoading.style.animation = 'spin 1s infinite alternate ease-in-out'
}

export function noLoader() {
  const revealBg = document.querySelector('.reveal-bg')
  const revealBgLoading = document.querySelector('.reveal-bg .loading')
  revealBg.style.opacity = '0'
  revealBg.style.visibility = 'hidden'
  revealBgLoading.style.transform = 'scale(1)'
  revealBgLoading.style.animation = 'none'
}
