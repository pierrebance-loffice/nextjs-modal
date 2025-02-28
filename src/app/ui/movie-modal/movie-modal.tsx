import Modal from '../modal/modal'
import Movie from '../movie/movie'

export default function MovieModal({ movie }: { movie: string }) {
  return (
    <Modal className="bg-green-400">
      <Movie movie={movie} />
    </Modal>
  )
}
