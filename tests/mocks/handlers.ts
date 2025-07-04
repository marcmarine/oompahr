import { http, HttpResponse } from 'msw'
import { mockApiResponses } from '../fixtures/responses'
import { mockWorkers } from '../fixtures/workers'

export const handlers = [
  http.get(
    'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas',
    () => {
      return HttpResponse.json(mockApiResponses.paginatedList)
    }
  ),
  http.get(
    'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/1',
    () => {
      return HttpResponse.json(mockWorkers.list.find((item) => item.id === 1))
    }
  ),
]
