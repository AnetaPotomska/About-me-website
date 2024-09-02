import { Footer } from '@/components/footer/Footer'
import { Navbar } from '@/components/Navbar'

export default async function WebLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

/*
<ThemeContextProvider>
  <Navbar />
  <main>{children}</main>
  <Footer />
  <ThemeSwitch />
</ThemeContextProvider>
*/
