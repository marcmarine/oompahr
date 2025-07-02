import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Worker from './components/Worker'
import Home from './components/Home'
import Detail from './components/Detail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route element={<Detail />}>
          <Route path=":id" element={<Worker />} />
        </Route>
      </Route>
    </Routes>
  )
}
