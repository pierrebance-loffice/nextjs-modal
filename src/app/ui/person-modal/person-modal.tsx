import Modal from '../modal/modal'
import Person from '../person/person'

export default function PersonModal({ person }: { person: string }) {
  return (
    <Modal className="bg-purple-400">
      <Person person={person} />
    </Modal>
  )
}
