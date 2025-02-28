import MovieModal from '@/app/ui/movie-modal/movie-modal'

type Props = { params: { movieid: string; personid: string } }

export default function Page({ params }: Props) {
  return (
    <div className="p2 m-2 rounded border-2 border-dashed border-green-800">
      <span className="m-2 p-2 font-bold italic text-gray-600">
        src/app/people/[personid]/@modal/(.)movies/[movieid]/page.tsx
      </span>
      <span className="m-2 p-2 font-bold italic text-green-800">
        Try to refresh the page !
      </span>
      <MovieModal movie={params.movieid} />
    </div>
  )
}
