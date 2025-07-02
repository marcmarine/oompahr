import { useParams } from 'react-router'

export default function Worker() {
  const { id } = useParams()

  return <h2 className="text-2xl font-bold">Worker #{id}</h2>
}
