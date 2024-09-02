'use client'
import { navPaths } from '@/lib/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggler } from './theme/ThemeToggler'

export const Navbar = () => {
  const currPathName = usePathname()
  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid me-2 ms-2 mb-4">
          <Link className="navbar-brand" href="/">
            <svg
              className={'nav-icon scale-on-hover' + (currPathName === '/' ? ' active' : '')}
              width="50"
              height="auto"
              viewBox="0 0 280 280"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M140 280C217.32 280 280 217.32 280 140C280 62.6801 217.32 0 140 0C62.6801 0 0 62.6801 0 140C0 217.32 62.6801 280 140 280ZM79 109.5C79 86.5849 90.7795 79.7502 98 79.7502C105.221 79.7502 117 86.585 117 109.5V147.001H79V109.5ZM117 218V167.001H79V218H59V157.001V109.5C59 79.4153 76.2205 59.7502 98 59.7502C119.779 59.7502 137 79.4154 137 109.5V157.001V218H117ZM171 146.35V82.3585C171.404 82.3493 171.806 82.34 172.206 82.3307L172.531 82.3231L173.377 82.3035C177.402 82.2104 181.205 82.1306 184.854 82.1641C192.265 82.232 198.252 82.7766 202.98 84.2403C207.454 85.6256 210.418 87.7076 212.466 90.8401C214.644 94.1704 216.5 99.786 216.5 109.5C216.5 124.316 208.304 133.288 196.606 139.111C188.38 143.205 178.954 145.378 171 146.35ZM205.519 157.015C193.976 162.76 181.213 165.446 171 166.472V218H151V157.001V72.5005V62.5005H161C164.663 62.5005 168.344 62.415 172.114 62.3274L172.914 62.3088C176.914 62.2163 181.022 62.1281 185.037 62.1649C192.954 62.2375 201.31 62.7866 208.895 65.1352C216.734 67.5622 224.051 72.0114 229.205 79.8944C234.231 87.5797 236.5 97.464 236.5 109.5C236.5 134.184 221.696 148.963 205.519 157.015Z"
              />
            </svg>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="aria-controls"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
            <ul className="navbar-nav column-gap-4 row-gap-2 align-items-md-center">
              {navPaths.map((navPath) => {
                return (
                  <li className="nav-item" key={navPath.path}>
                    <Link
                      className={'nav-link' + (currPathName === navPath.path ? ' active' : '')}
                      href={navPath.path}
                      {...(currPathName === navPath.path && { 'aria-current': 'page' })}
                    >
                      {navPath.name}
                    </Link>
                  </li>
                )
              })}
              <li>
                <ThemeToggler />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
