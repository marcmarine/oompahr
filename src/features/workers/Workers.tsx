import { useCallback, useMemo, useRef } from 'react'
import { NavLink, useSearchParams } from 'react-router'
import { useGetWorkersInfiniteQuery, usePrefetch } from './workersApiSlice'
import { normalizeText } from '../../lib/utils'
import SearchResultsSummary from '../../components/SearchResultsSummary'
import { getHighlightedText } from '../../lib/getHighlightedText'

export default function Workers() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [searchParams] = useSearchParams()
  const prefetchWorker = usePrefetch('getWorkerById')
  const { data, isError, isLoading, fetchNextPage, isFetching } =
    useGetWorkersInfiniteQuery()

  const allWorkers = data?.pages.flat() ?? []
  const searchTerm = searchParams.get('query') ?? ''

  const handleNextPage = async () => {
    await fetchNextPage()
  }

  const filteredWorkers = useMemo(() => {
    const term = normalizeText(searchTerm)

    return allWorkers.filter((worker) => {
      const fullName = `${worker.first_name} ${worker.last_name}`
      const profession = worker.profession

      return (
        normalizeText(fullName).includes(term) ||
        normalizeText(profession).includes(term)
      )
    })
  }, [allWorkers, searchTerm])

  const lastItemRef = useCallback(
    (node: HTMLDivElement) => {
      if (isFetching) return
      if (observerRef.current) observerRef.current.disconnect()

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage()
        }
      })

      if (node) observerRef.current.observe(node)
    },
    [isFetching, fetchNextPage]
  )

  if (isError) return <div>An error has occurred!</div>
  if (isLoading) return <span aria-busy="true">Fetching...</span>

  const remainingItemsToFillRow = [
    ...Array(3 - (filteredWorkers.length % 3) + 3).keys(),
  ]

  return (
    <>
      {searchParams.has('query') && (
        <SearchResultsSummary
          numberOfResults={filteredWorkers.length}
          searchTerm={searchTerm}
        />
      )}
      <div className="py-4 tw-grid gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
        {filteredWorkers.map(
          ({ id, first_name, last_name, image, profession, email }, index) => {
            const isLast: boolean = index === allWorkers.length - 1
            const fullName = `${first_name} ${last_name}`
            const [username] = email.split('@')!

            return (
              <article
                key={id}
                ref={isLast ? lastItemRef : null}
                className="group"
              >
                <header>
                  <div className="aspect-[4/3] overflow-hidden rounded-xs">
                    <img
                      className="group-hover:scale-105 transition-transform duration-400"
                      src={image}
                      alt={first_name}
                    />
                  </div>
                </header>
                <hgroup>
                  <NavLink
                    to={`/${id}`}
                    className="text-lg"
                    onMouseEnter={() => prefetchWorker(id)}
                  >
                    {getHighlightedText(fullName, searchTerm)}
                  </NavLink>
                  <p>
                    <small>{username}</small>
                  </p>
                </hgroup>
                <footer>
                  <span>
                    <small>{getHighlightedText(profession, searchTerm)}</small>
                  </span>
                </footer>
              </article>
            )
          }
        )}
        {isFetching &&
          !searchTerm &&
          remainingItemsToFillRow.map((item) => (
            <article
              aria-busy="true"
              key={item}
              className="min-h-76 place-content-center"
            ></article>
          ))}
      </div>
      {searchTerm && (
        <button onClick={handleNextPage} aria-busy={isFetching} type="submit">
          Fetch More
        </button>
      )}
    </>
  )
}
