import MovieModal from '@/app/ui/movie-modal/movie-modal'
import Person from '@/app/ui/person/person'

type Props = { params: { movieid: string; personid: string } }

export default async function Page({ params }: Props) {
  return (
    <div className="p2 m-2 rounded border-2 border-dashed border-green-800">
      <span className="m-2 p-2 font-bold italic text-gray-600">
        src/app/people/[personid]/movies/[movieid]/page.tsx
      </span>
      <div className="m-2 flex flex-col rounded bg-green-600 p-2">
        <Person person={params.personid} />
        <MovieModal movie={params.movieid} />
      </div>
    </div>
  )
}
