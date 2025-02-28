'use client'

import Link from 'next/link'

export default async function Home() {
  return (
    <div className="m-2 flex flex-col rounded bg-blue-300 p-2">
      <span className="text-xl">Home </span>
      <Link href="/movies/1">&gt; Link to movie #1</Link>
      <Link href="/people/1">&gt; Link to person #1</Link>
    </div>
  )
}
