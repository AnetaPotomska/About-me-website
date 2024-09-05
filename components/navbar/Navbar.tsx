'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LanguageSwitch } from '../language/LanguageSwitch'
import { ThemeToggler } from '../theme/ThemeToggler'
import { Brand } from './Brand'
import { NavPath } from '@/lib/types'
import { HamburgerIcon } from '../icons/HamburgerIcon'

interface NavbarProps {
  navPaths: NavPath[]
}

export const Navbar = ({ navPaths }: NavbarProps) => {
  const currPathName = usePathname()
  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid me-2 ms-2 mb-4">
          <Brand currPathName={currPathName} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="aria-controls"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <HamburgerIcon />
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
              <li className="nav-item ms-md-4" key="themeToggler">
                <ThemeToggler />
              </li>
              <li className="nav-item" key="languageSwitch">
                <LanguageSwitch />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
