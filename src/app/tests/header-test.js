import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

describe('Header', () => {
  it('renders a link to create a new list', () => {
    render(<Header />)
    const link = screen.getByRole('link', { name: 'Neue Liste erstellen' })
    expect(link).toHaveAttribute('href', '/register')
  })

  it('renders a link to join an existing list', () => {
    render(<Header />)
    const link = screen.getByRole('link', { name: 'Liste beitreten' })
    expect(link).toHaveAttribute('href', '/join')
  })

  it('renders a link to view the shopping list', () => {
    render(<Header />)
    const link = screen.getByRole('link', { name: 'Einkaufsliste anzeigen' })
    expect(link).toHaveAttribute('href', '/list')
  })
})
