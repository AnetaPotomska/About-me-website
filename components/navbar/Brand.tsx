import Link from 'next/link'

interface BrandProps {
  currPathName: string
}

export const Brand = ({ currPathName }: BrandProps) => {
  return (
    <>
      <Link className="navbar-brand" href="/">
        <svg
          className={'icon big-icon' + (currPathName === '/' ? ' active' : '')}
          viewBox="0 0 111 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M34 0.5L0 79.5L34 33.5L64.5 79.5L34 0.5Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64.5 79.5C64.4521 48.0513 64.5 0.5 64.5 0.5H110.5L76.5 33.5L64.5 79.5ZM73 16L97.5 5L76.5 24.5L73 16Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64.5 79.5C64.4521 48.0513 64.5 0.5 64.5 0.5H110.5L76.5 33.5L64.5 79.5ZM73 16L97.5 5L76.5 24.5L73 16Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64.5 79.5C64.4521 48.0513 64.5 0.5 64.5 0.5H110.5L76.5 33.5L64.5 79.5ZM73 16L97.5 5L76.5 24.5L73 16Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64.5 79.5C64.4521 48.0513 64.5 0.5 64.5 0.5H110.5L76.5 33.5L64.5 79.5ZM73 16L97.5 5L76.5 24.5L73 16Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64.5 79.5C64.4521 48.0513 64.5 0.5 64.5 0.5H110.5L76.5 33.5L64.5 79.5ZM73 16L97.5 5L76.5 24.5L73 16Z"
          />
          <path d="M39.5 46.5L45.5 55L16.5 61.5L39.5 46.5Z" />
        </svg>
      </Link>
    </>
  )
}
