import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Fresh-squeezed lemonade full of flavour. Explore our menu, discover our story and book Thirst Trap Lemonade for your next event."
    >
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto px-4 py-12 space-y-8 md:space-y-0">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-script text-dark mb-4">
            Fresh‑Squeezed, Big Flavour
          </h1>
          <p className="mb-6 text-lg text-dark">
            Handcrafted lemonade made right in front of you. We bring good
            vibes, great flavours and even cotton candy to every sip.
          </p>
          <Link href="/flavors" className="inline-block bg-primary text-dark px-6 py-3 rounded-full font-bold hover:bg-secondary hover:text-white transition-colors">
            Explore Flavours
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/hero.png"
            alt="Illustration of refreshing lemonade"
            className="rounded-xl max-w-xs md:max-w-sm"
          />
        </div>
      </section>
      {/* About Preview */}
      <section className="bg-primary text-dark py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-script mb-4">About Us</h2>
          <p className="mb-4">
            Thirst Trap Lemonade is a family‑run pop‑up by Andrew and
            Jennifer. Our business was built around the idea of serving
            fresh‑squeezed lemonade full of flavour【771567958029848†L37-L48】. We squeeze each
            lemon to order and stir in real fruits and house‑made syrups.
            From local festivals to private parties, we bring good vibes,
            great flavours and optional cotton candy【771567958029848†L41-L48】.
          </p>
          <p>
            Want to hear our full story?
            <Link href="/about" className="underline ml-1">Learn more →</Link>
          </p>
        </div>
      </section>
      {/* Flavours Preview */}
      <section className="py-12 px-4">
        <h2 className="section-title text-center mb-8 font-script text-3xl text-dark">
          Signature Flavours
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow p-5 text-center hover:-translate-y-1 transition-transform">
            <i className="fas fa-lemon text-secondary text-3xl mb-3"></i>
            <h3 className="font-script text-xl mb-1">Classic Cutie</h3>
            <p className="text-sm">Our OG lemonade: simple, bright and utterly refreshing.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 text-center hover:-translate-y-1 transition-transform">
            <i className="fas fa-ice-cream text-secondary text-3xl mb-3"></i>
            <h3 className="font-script text-xl mb-1">Berry Bombshell</h3>
            <p className="text-sm">Real strawberries blended into our lemon base for a fruity pop.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 text-center hover:-translate-y-1 transition-transform">
            <i className="fas fa-seedling text-secondary text-3xl mb-3"></i>
            <h3 className="font-script text-xl mb-1">Blueberry Babe</h3>
            <p className="text-sm">Muddled blueberries add a deep berry hue and natural sweetness.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 text-center hover:-translate-y-1 transition-transform">
            <i className="fas fa-leaf text-secondary text-3xl mb-3"></i>
            <h3 className="font-script text-xl mb-1">Mexican Baddie</h3>
            <p className="text-sm">Mint &amp; cucumber lemonade with a refreshing bite.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/flavors" className="bg-dark text-white px-6 py-3 rounded-full font-bold hover:bg-secondary transition-colors">
            View All Flavours
          </Link>
        </div>
      </section>
      {/* Events Preview */}
      <section className="bg-secondary text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-script mb-4">Bring Thirst Trap to Your Event</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Fresh‑squeezed lemonade at birthdays, graduations &amp; block
              parties【771567958029848†L165-L167】
            </li>
            <li>Pop‑ups at local festivals &amp; markets across the state</li>
            <li>
              Customisable add‑ons like cotton candy and flavoured syrups【771567958029848†L41-L48】
            </li>
            <li>Friendly staff serving good vibes and great drinks</li>
          </ul>
          <p className="mt-4 text-sm">
            Invite us to your next celebration and let us craft lemonades your
            guests will remember!
          </p>
        </div>
      </section>
      {/* Call to Action */}
      <section className="bg-dark text-white text-center py-12 px-4">
        <h2 className="text-3xl font-script mb-4">Ready to Sip?</h2>
        <p className="max-w-2xl mx-auto mb-6 text-sm">
          Whether you're craving a classic lemonade or something adventurous,
          we have a flavour for you. Check out our full menu or book us for
          your event.
        </p>
        <Link href="/contact" className="bg-primary text-dark px-6 py-3 rounded-full font-bold hover:bg-secondary hover:text-white transition-colors">
          Get in Touch
        </Link>
      </section>
    </Layout>
  )
}