import { Outlet } from 'react-router'
import Header from './Header'

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  )
}
