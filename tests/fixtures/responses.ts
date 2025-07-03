import { mockWorkers } from './workers'

export const mockApiResponses = {
  paginatedList: {
    current: 1,
    total: 20,
    results: mockWorkers.list,
  },
}
