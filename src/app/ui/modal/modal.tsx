'use client'

import { useRouter } from 'next/navigation'
import * as React from 'react'

export default function Modal({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  const router = useRouter()

  const [isOpen, setIsOpen] = React.useState(true)

  const closeModal = React.useCallback(() => {
    setIsOpen(false)
    router.back()
  }, [router])

  return (
    <>
      {isOpen && (
        <div className="absolute bottom-0 left-0 right-0" style={{ top: 40 }}>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-gray-500 opacity-25"></div>
          <div
            className={`absolute bottom-1/4 left-1/4 right-1/4 top-1/4 flex flex-col ${className ?? ''} rounded p-2`}
          >
            <button onClick={closeModal}>Close modale</button>
            {children}
          </div>
        </div>
      )}
    </>
  )
}
