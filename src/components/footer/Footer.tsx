import { EmailFooter } from './EmailFooter'
import { GithubFooter } from './GithubFooter'
import { LinkedinFooter } from './LinkedinFooter'

export const Footer = () => {
  return (
    <>
      <footer className="mb-10 px-4 text-center">
        <div className="d-flex align-items-center justify-content-center gap-4 mb-4">
          <EmailFooter />
          <LinkedinFooter />
          <GithubFooter />
        </div>
        <small>
          &copy; Aneta Potomská
          <br />
          Aplikace byla napsána pomocí: Next.js, TypeScript a Bootstrap. Návrh byl vytvořen pomocí:
          Figma.
        </small>
      </footer>
    </>
  )
}
