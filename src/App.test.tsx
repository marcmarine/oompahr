import { http, HttpResponse } from 'msw'
import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { server } from '../tests/mocks/node'
import { renderWithProviders } from '../tests/utils/render'
import App from './App'

describe('App', () => {
  it('displays the workers list after loading', async () => {
    renderWithProviders(<App />)

    screen.getByText(/fetching/i)

    await screen.findByRole('link', { name: /marcy karadzas/i })

    const img = screen.getByRole('img', {
      name: /marc/i,
    }) as HTMLImageElement

    expect(img.src).toBe(
      'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/1.jpg'
    )
  })

  it('handles errors when fetching the workers', async () => {
    server.use(
      http.get(
        'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas',
        () => {
          return new HttpResponse(null, { status: 500 })
        }
      )
    )

    renderWithProviders(<App />)

    screen.getByText(/fetching/i)

    await screen.findByText('An error has occurred!')
  })
})
