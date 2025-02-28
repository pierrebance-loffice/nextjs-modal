import PersonModal from '@/app/ui/person-modal/person-modal'
import Movie from '@/app/ui/movie/movie'

type Props = { params: { movieid: string; personid: string } }

export default async function Page({ params }: Props) {
  return (
    <div className="p2 m-2 rounded border-2 border-dashed border-purple-800">
      <span className="m-2 p-2 font-bold italic text-gray-600">
        src/app/movies/[movieid]/people/[personid]/page.tsx
      </span>
      <div className="m-2 flex flex-col rounded bg-purple-600 p-2">
        <Movie movie={params.movieid} />
        <PersonModal person={params.personid} />
      </div>
    </div>
  )
}
