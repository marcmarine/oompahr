import { NavLink } from 'react-router'

export default function SearchResultsSummary({
  numberOfResults,
  searchTerm,
}: {
  numberOfResults: number
  searchTerm: string
}) {
  return (
    <div className="px-2 flex items-center justify-between">
      <span className="text-xs !text-[var(--pico-muted-color)]">
        {numberOfResults} result
        {numberOfResults !== 1 ? 's' : ''} for the term "{searchTerm}"
      </span>
      <NavLink to="/" className="secondary text-xs">
        Clear filters
      </NavLink>
    </div>
  )
}
