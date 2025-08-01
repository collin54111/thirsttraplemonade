import Layout from '@/components/Layout'
import Link from 'next/link'

const menuItems = [
  {
    name: 'Classic Cutie',
    description: 'OG lemonade made from freshly squeezed lemons and simple syrup.',
    price: '$8.00',
    icon: 'fa-lemon',
  },
  {
    name: 'Berry Bombshell',
    description: 'Lemonade blended with real strawberries for a fruity burst.',
    price: '$9.00',
    icon: 'fa-ice-cream',
  },
  {
    name: 'Blueberry Babe',
    description: 'Muddled blueberries add a deep berry hue and natural sweetness.',
    price: '$9.00',
    icon: 'fa-seedling',
  },
  {
    name: 'Mexican Baddie',
    description: 'Mint & cucumber lemonade with a refreshing bite.',
    price: '$9.00',
    icon: 'fa-leaf',
  },
  {
    name: 'Cotton Candy',
    description: 'A whimsical cotton‑candy swirl that’s sweet and totally Instagrammable.',
    price: '$10.00',
    icon: 'fa-candy-cane',
  },
  {
    name: 'Water (bottled)',
    description: 'Stay hydrated with chilled bottled water.',
    price: '$1.50',
    icon: 'fa-water',
  },
  // Additional creative flavours beyond the core menu
  {
    name: 'Strawberry Basil',
    description: 'Juicy strawberries muddled with fresh basil for a sweet‑herbal kick.',
    price: '$9.00',
    icon: 'fa-strawberry',
  },
  {
    name: 'Lavender Honey',
    description: 'Floral lavender syrup and a drizzle of local honey for a calming sip.',
    price: '$9.00',
    icon: 'fa-spa',
  },
]

export default function Flavors() {
  return (
    <Layout
      title="Flavours Menu"
      description="Explore every flavour on the Thirst Trap Lemonade menu. From OG lemonade to cotton‑candy swirls, fruity infusions and herbal twists, there’s a sip for everyone."
    >
      <section className="py-12 px-4">
        <h1 className="text-4xl font-script text-center text-dark mb-6">Our Flavours</h1>
        <p className="text-center max-w-3xl mx-auto mb-10 text-sm">
          Each drink starts with lemons squeezed right before your eyes【771567958029848†L37-L48】. We then blend in homemade syrups, fresh fruit and herbs to create an unforgettable sip. Mix and match flavours or ask about custom combinations for your event!
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <div key={item.name} className="bg-white rounded-xl shadow p-5 text-center hover:-translate-y-1 transition-transform">
              <i className={`fas ${item.icon} text-secondary text-3xl mb-3`}></i>
              <h3 className="font-script text-xl mb-1">{item.name}</h3>
              <p className="text-sm mb-2">{item.description}</p>
              <span className="font-bold text-dark">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <h2 className="text-2xl font-script mb-4">Custom Creations</h2>
          <p className="max-w-3xl mx-auto text-sm mb-4">
            Have a flavour idea or need a signature drink for your party? We love
            collaborating! Reach out and we’ll craft a lemonade that’s uniquely
            yours.
          </p>
          <Link href="/contact" className="bg-dark text-white px-6 py-3 rounded-full font-bold hover:bg-secondary transition-colors">Contact Us</Link>
        </div>
      </section>
    </Layout>
  )
}