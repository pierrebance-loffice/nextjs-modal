import * as React from 'react'
import Person from '@/app/ui/person/person'

type Props = {
  params: { personid: string }
}

export default async function PersonHome({ params }: Props) {
  return (
    <div className="green-purple-800 p2 m-2 rounded border-2 border-dashed">
      <span className="m-2 p-2 font-bold italic text-gray-600">
        src/app/people/[personid]/page.tsx
      </span>
      <div className="m-2 flex flex-col rounded bg-green-200 p-2">
        <Person person={params.personid} />
      </div>
    </div>
  )
}
