import { useNavigate, useParams } from 'react-router'
import logo from '../assets/logo.svg'
import { GITHUB_REPO_URL } from '../lib/constants'

export default function Header() {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li>
              <button
                className="group !p-0 !bg-transparent !border-none focus:!shadow-none"
                onClick={() => {
                  params.id ? navigate(-1) : navigate('/')
                }}
                type="button"
              >
                <img
                  src={logo}
                  alt="OompaHR Logo"
                  className="w-16 group-hover:-rotate-2 group-hover:scale-95 group-active:scale-90 transition-all drop-shadow-lg group-hover:drop-shadow-md group-active:drop-shadow-sm duration-300"
                />
              </button>
            </li>
          </ul>
          <ul>
            <li>
              <a href={GITHUB_REPO_URL} className="secondary" target="_blank">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
