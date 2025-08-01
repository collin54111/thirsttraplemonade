import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-dark text-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-script text-primary">Thirst Trap</Link>
        <button
          className="md:hidden text-primary text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <i className="fas fa-bars"></i>
        </button>
        <nav className={`${open ? 'block' : 'hidden'} absolute md:relative top-full right-0 md:top-auto md:right-auto bg-dark md:bg-transparent w-48 md:w-auto p-4 md:p-0 rounded-b-md md:rounded-none md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li className="mb-2 md:mb-0"><Link href="/" className="hover:text-primary">Home</Link></li>
            <li className="mb-2 md:mb-0"><Link href="/about" className="hover:text-primary">Our Story</Link></li>
            <li className="mb-2 md:mb-0"><Link href="/flavors" className="hover:text-primary">Flavours</Link></li>
            <li className="mb-2 md:mb-0"><Link href="/events" className="hover:text-primary">Events</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}