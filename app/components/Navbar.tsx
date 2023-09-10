import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

function Navbar() {
  return (
    <nav className='relative flex flex-col gap-10 bg-white px-5 py-4 xl:container xl:px-9'>
      <NavbarDesktop />
      <NavbarMobile />
    </nav>
  )
}

export default Navbar
