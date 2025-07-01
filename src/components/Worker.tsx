import { useParams } from 'react-router'

export default function Worker() {
  let { id } = useParams()
  return (
    <div>
      <h2 className="text-2xl font-bold">Worker #{id}</h2>
    </div>
  )
}
