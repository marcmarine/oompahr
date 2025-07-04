import { http, HttpResponse } from 'msw'
import { describe, expect, it } from 'vitest'
import { fireEvent, screen } from '@testing-library/react'
import { server } from '../tests/mocks/node'
import { renderWithProviders } from '../tests/utils/render'
import App from './App'

describe('App', () => {
  describe('home view', () => {
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

    describe('filters', () => {
      it('filters workers by name', async () => {
        renderWithProviders(<App />)

        await screen.findByRole('link', { name: /marcy karadzas/i })

        const nameInput = screen.getByPlaceholderText(/search/i)

        fireEvent.input(nameInput, { target: { value: 'marcy' } })

        expect(
          await screen.findByRole('link', { name: /marcy karadzas/i })
        ).toBeDefined()

        expect(screen.queryByRole('link', { name: /evangelia/i })).toBeNull()
      })

      it('filters workers by profession', async () => {
        renderWithProviders(<App />)

        await screen.findByRole('link', { name: /marcy karadzas/i })

        const nameInput = screen.getByPlaceholderText(/search/i)

        fireEvent.input(nameInput, { target: { value: 'metalworker' } })

        expect(
          screen.queryByRole('link', { name: /marcy karadzas/i })
        ).toBeNull()

        expect(
          screen.queryByRole('link', { name: /evangelia/i })
        ).not.toBeNull()
      })
    })

    describe('navigation', () => {
      it('navigates to the detail view when clicking on a worker', async () => {
        renderWithProviders(<App />)

        const workerLink = await screen.findByRole('link', {
          name: /marcy karadzas/i,
        })

        fireEvent.click(workerLink)

        await screen.findByRole('heading', { name: /marcy karadzas/i })
      })
    })
  })

  describe('details view', () => {
    it('displays the name, profession, and email correctly', async () => {
      window.history.pushState({}, '', '/1')
      renderWithProviders(<App />)

      await screen.findByRole('heading', { name: /marcy karadzas/i })

      expect(
        screen.getByRole('heading', { name: /marcy karadzas/i })
      ).toBeDefined()

      expect(screen.getAllByText(/developer/i)).toBeDefined()

      const emailLink = screen.getByRole('button', { name: /send a message/i })
      expect(emailLink).toBeDefined()
      expect(emailLink).toHaveAttribute(
        'href',
        'mailto:mkaradzas1@visualengin.com'
      )
    })

    it('navigates back to the home view when clicking the header icon', async () => {
      window.history.pushState({}, '', '/1')
      renderWithProviders(<App />)

      await screen.findByRole('heading', { name: /marcy karadzas/i })

      const logoImg = screen.getByRole('img', { name: /logo/i })
      const button = logoImg.closest('button') as HTMLButtonElement

      expect(button).toBeDefined()

      button.click()

      await screen.findByText(/fetching/i)

      await screen.findByRole('link', { name: /marcy karadzas/i })
    })
  })
})
