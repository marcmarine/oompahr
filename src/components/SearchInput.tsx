import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'

export default function SearchButton() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('query') || '')

  useEffect(() => {
    setQuery(searchParams.get('query') || '')
  }, [searchParams])

  function handleSearch(value: string) {
    setQuery(value)
    setSearchParams(value && { query: value })
  }

  return (
    <input
      type="search"
      name="search"
      placeholder="Search"
      aria-label="Search"
      value={query}
      onChange={(event) => handleSearch(event.target.value)}
      className="!mb-0"
    />
  )
}
