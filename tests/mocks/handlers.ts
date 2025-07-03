import { http, HttpResponse } from 'msw'
import { mockApiResponses } from '../fixtures/responses'

export const handlers = [
  http.get(
    'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas',
    () => {
      return HttpResponse.json(mockApiResponses.paginatedList)
    }
  ),
]
