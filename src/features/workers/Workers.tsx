import { useCallback, useMemo, useRef } from 'react'
import { NavLink, useSearchParams } from 'react-router'
import { useGetWorkersInfiniteQuery } from './workersApiSlice'
import { normalize } from '../../lib/utils'

export default function Workers() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [searchParams] = useSearchParams()
  const { data, isError, isLoading, fetchNextPage, isFetching } =
    useGetWorkersInfiniteQuery()

  const allWorkers = data?.pages.flat() ?? []
  const searchTerm = searchParams.get('query') ?? ''

  const handleNextPage = async () => {
    await fetchNextPage()
  }

  const filteredWorkers = useMemo(() => {
    const term = normalize(searchTerm)

    return allWorkers.filter((worker) => {
      const fullName = `${worker.first_name} ${worker.last_name}`
      const profession = worker.profession

      return (
        normalize(fullName).includes(term) ||
        normalize(profession).includes(term)
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

  return (
    <>
      {searchParams.has('query') && (
        <div className="px-2">
          <p className="text-xs !text-[var(--pico-muted-color)]">
            {filteredWorkers.length} result
            {filteredWorkers.length !== 1 ? 's' : ''} for the term "{searchTerm}
            "
          </p>
        </div>
      )}
      <div className="tw-grid gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
        {filteredWorkers.map(
          ({ id, first_name, last_name, image, profession, email }, index) => {
            const isLast: boolean = index === allWorkers.length - 1
            return (
              <article key={id} ref={isLast ? lastItemRef : null}>
                <header className="aspect-[4/3] overflow-hidden">
                  <img className="rounded-xs" src={image} alt={first_name} />
                </header>
                <hgroup>
                  <NavLink to={`/${id}`} className="text-lg">
                    {first_name} {last_name}
                  </NavLink>
                  <p>
                    <small>{email.split('@')[0]}</small>
                  </p>
                </hgroup>
                <footer>
                  <span>
                    <small>{profession}</small>
                  </span>
                </footer>
              </article>
            )
          }
        )}
        {isFetching &&
          !searchTerm &&
          [...Array(3 - (filteredWorkers.length % 3) + 3).keys()].map(
            (item) => (
              <article
                aria-busy="true"
                key={item}
                className="min-h-76 place-content-center"
              ></article>
            )
          )}
      </div>
      {searchTerm && (
        <button onClick={handleNextPage} aria-busy={isFetching} type="submit">
          Fetch More
        </button>
      )}
    </>
  )
}
