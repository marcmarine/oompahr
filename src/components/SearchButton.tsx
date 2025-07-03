import { useSearchParams } from 'react-router'

export default function SearchButton() {
  const [searchParams, setSearchParams] = useSearchParams()

  function handleSearch(query: string) {
    setSearchParams(query && { query })
  }

  return (
    <input
      type="search"
      name="search"
      placeholder="Search"
      aria-label="Search"
      value={searchParams.get('query') || ''}
      onChange={(event) => handleSearch(event.target.value)}
      className="!mb-0"
    />
  )
}
