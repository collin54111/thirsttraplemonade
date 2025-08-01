import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div>
          <h4 className="text-xl font-script text-primary mb-2">Thirst Trap Lemonade</h4>
          <p className="text-sm">Fresh‑squeezed lemonade full of flavour.</p>
        </div>
        <div>
          <h4 className="text-xl font-script text-primary mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/flavors">Flavours</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-script text-primary mb-2">Follow Us</h4>
          <p className="text-sm">
            <a href="https://www.instagram.com/thirsttrap.lemonade/" target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center space-x-1">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}