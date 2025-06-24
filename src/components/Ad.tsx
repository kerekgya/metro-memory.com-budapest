'use client'

import React, { useEffect, useRef } from 'react'

export const AdBlock = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    try {
      // the global script is loaded in the document head. pushing a new
      // request will render the ad without using document.write
      if (typeof window !== 'undefined') {
        ;(window as any).adsbygoogle = (window as any).adsbygoogle || []
        ;(window as any).adsbygoogle.push({})
      }
    } catch (e) {
      // ignore ad rendering errors
      console.error('adsbygoogle error', e)
    }
  }, [])

  return (
    <ErrorBoundary>
      <div className="my-6 w-full" ref={ref as React.RefObject<HTMLDivElement>}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-7420123397062174"
          data-ad-slot="6989466712"
          data-ad-format="fluid"
          data-ad-layout="in-article"
          data-full-width-responsive="true"
        />
      </div>
    </ErrorBoundary>
  )
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <></>
    }

    return this.props.children
  }
}

export default AdBlock
