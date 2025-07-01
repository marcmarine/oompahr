import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Workers from './components/Workers'
import Worker from './components/Worker'

export default function App() {
  return (
    <Routes>
      <Route path={import.meta.env.BASE_URL} element={<Layout />}>
        <Route index element={<Workers />} />
        <Route path=":id" element={<Worker />} />
      </Route>
    </Routes>
  )
}
