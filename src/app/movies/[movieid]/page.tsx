import * as React from 'react'
import Movie from '@/app/ui/movie/movie'

type Props = {
  params: { movieid: string }
}

export default async function MovieHome({ params }: Props) {
  return (
    <div className="p2 m-2 rounded border-2 border-dashed border-purple-800">
      <span className="m-2 p-2 font-bold italic text-gray-600">
        src/app/movies/[movieid]/page.tsx
      </span>
      <div className="m-2 flex flex-col rounded bg-purple-200 p-2">
        <Movie movie={params.movieid} />
      </div>
    </div>
  )
}
