import React, { useEffect } from 'react'
import { resetLoader } from '../../utils/onloadAnims'

export default function Loading() {
  useEffect(() => {
    resetLoader()
  })

  return (
    <>
      <div className="reveal-bg">
        <div className="loading" />
      </div>
    </>
  )
}
