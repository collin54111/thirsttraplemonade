import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Events() {
  return (
    <Layout
      title="Events & Catering"
      description="See where Thirst Trap Lemonade is popping up next and learn how to book us for your own party or festival."
    >
      <section className="py-12 px-4">
        <h1 className="text-4xl font-script text-center text-dark mb-6">Events &amp; Pop‑Ups</h1>
        <p className="text-center max-w-3xl mx-auto mb-10 text-sm">
          We love hitting the road to share our lemonade with the community. Catch us at fairs, festivals and farmers markets throughout the season. Below is a sample of upcoming appearances. Want Thirst Trap at your own bash? Keep scrolling to learn about private events.
        </p>
        <div className="max-w-3xl mx-auto bg-primary text-dark rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-script mb-4">Upcoming Pop‑Ups</h2>
          <ul className="space-y-2 text-sm list-disc list-inside">
            <li><strong>Saturday, Aug 9:</strong> Downtown Farmers Market – 9 AM – 1 PM</li>
            <li><strong>Friday, Aug 15:</strong> Summer Music Fest – 5 PM – 9 PM</li>
            <li><strong>Sunday, Sept 7:</strong> Artisan Fair &amp; Craft Show – 10 AM – 3 PM</li>
            <li><strong>Saturday, Sept 20:</strong> Food Truck Rally – 11 AM – 4 PM</li>
          </ul>
        </div>
        <div className="bg-primary text-dark rounded-xl p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-script mb-4">Private Events &amp; Catering</h2>
          <p className="mb-4 text-sm">
            Your celebration deserves a drink as unique as you are. Thirst Trap
            Lemonade caters birthdays, graduations and block parties【771567958029848†L165-L167】, corporate
            events and everything in between. When you book us, you get:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Fresh‑squeezed lemonade served to order for each guest.</li>
            <li>Choice of our signature flavours with the option to create a custom drink.</li>
            <li>Cotton‑candy toppers, fresh fruit garnishes and colourful straws【771567958029848†L41-L48】.</li>
            <li>Friendly staff bringing good vibes and keeping the line moving.</li>
            <li>All supplies and cleanup handled by us so you can enjoy the party.</li>
          </ul>
          <p className="mt-4 text-sm">
            We’ll work with you to discuss your event details, guest count and pricing in advance so there are no surprises—only delicious drinks and happy guests.
          </p>
          <Link href="/contact" className="inline-block bg-secondary text-white px-6 py-3 rounded-full font-bold mt-4 hover:bg-dark transition-colors">
            Book Your Event
          </Link>
        </div>
      </section>
    </Layout>
  )
}