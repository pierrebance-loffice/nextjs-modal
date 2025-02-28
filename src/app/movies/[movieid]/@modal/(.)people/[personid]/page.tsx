import PersonModal from '@/app/ui/person-modal/person-modal'

type Props = { params: { movieid: string; personid: string } }

export default async function Page({ params }: Props) {
  return (
    <div className="p2 m-2 rounded border-2 border-dashed border-purple-800">
      <span className="m-2 p-2 font-bold italic text-gray-600">
        src/app/movies/[movieid]/@modal/(.)people/[personid]/page.tsx
      </span>
      <span className="m-2 p-2 font-bold italic text-purple-800">
        Try to refresh the page !
      </span>
      <PersonModal person={params.personid} />
    </div>
  )
}
