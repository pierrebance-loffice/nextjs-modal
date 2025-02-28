import Link from 'next/link'
import * as React from 'react'

export default async function Movie({ movie }: { movie: string }) {
  return (
    <div className="flex flex-col">
      <span>Film #{movie}</span>
      <Link href="/people/1">&gt;&gt; Open person #1 page</Link>
      <Link href="/movies/1/people/1">&gt;&gt; Open person #1 in modal</Link>
    </div>
  )
}
