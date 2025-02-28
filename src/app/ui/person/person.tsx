import Link from 'next/link'
import * as React from 'react'

export default async function Person({ person }: { person: string }) {
  return (
    <div className="flex flex-col">
      <span>Personne #{person}</span>
      <Link href="/movies/1">&gt;&gt; Open movie #1 page</Link>
      <Link href="/people/1/movies/1">&gt;&gt; Open movie #1 in modal</Link>
    </div>
  )
}
