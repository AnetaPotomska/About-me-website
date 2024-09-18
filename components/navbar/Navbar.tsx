'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LanguageSwitch } from '../language/LanguageSwitch'
import { ThemeToggler } from '../theme/ThemeToggler'
import { Brand } from './Brand'
import { NavPath } from '@/lib/types'
import { HamburgerIcon } from '../icons/HamburgerIcon'
import { useEffect, useRef, useState } from 'react'

interface NavbarProps {
  navPaths: NavPath[]
}

export const Navbar = ({ navPaths }: NavbarProps) => {
  const currPathName = usePathname()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const menuRef = useRef<HTMLInputElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu()
    }
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid me-2 ms-2">
          <Brand currPathName={currPathName} />
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="aria-controls"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <HamburgerIcon />
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`}
            ref={menuRef}
            id="navbarContent"
          >
            <ul className="navbar-nav column-gap-4 row-gap-2 align-items-md-center">
              {navPaths.map((navPath) => {
                return (
                  <li className="nav-item" key={navPath.path}>
                    <Link
                      className={'nav-link' + (currPathName === navPath.path ? ' active' : '')}
                      href={navPath.path}
                      onClick={closeMenu}
                      {...(currPathName === navPath.path && { 'aria-current': 'page' })}
                    >
                      {navPath.name}
                    </Link>
                  </li>
                )
              })}
              <div className="nav-last">
                <li className="nav-item ms-md-4" key="themeToggler">
                  <ThemeToggler />
                </li>
                <li className="nav-item" key="languageSwitch">
                  <LanguageSwitch />
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
