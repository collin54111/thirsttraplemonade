import Layout from '@/components/Layout'

export default function About() {
  return (
    <Layout
      title="Our Story"
      description="Learn about Andrew and Jennifer's journey starting Thirst Trap Lemonade and discover our promise of fresh lemons, good vibes and creative flavours."
    >
      <section className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto px-4 py-12 space-y-8 md:space-y-0">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-script text-dark mb-4">Our Story</h1>
          <p className="mb-4 text-sm">
            We’re Andrew and Jennifer, the duo behind Thirst Trap Lemonade.
            What started as a simple idea—squeezing lemons to order at a
            small farmers’ market—quickly turned into a full‑time passion.
            People loved watching us make their drinks right in front of
            them and were hooked on the fresh flavours we offered【771567958029848†L37-L48】.
          </p>
          <p className="mb-4 text-sm">
            From our very first event, we knew we wanted to create more than
            just another lemonade stand. We wanted to build a pop‑up
            experience, complete with good tunes, friendly faces and fun
            additions like cotton‑candy swirls. Today you’ll find us
            traveling to local festivals, fairs and private parties, pouring
            bright lemonades and spreading joy【771567958029848†L41-L48】.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/hero.png"
            alt="Refreshing glass of lemonade"
            className="rounded-xl max-w-xs md:max-w-sm"
          />
        </div>
      </section>
      <section className="bg-primary text-dark py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-script mb-4">Our Promise</h2>
          <p className="mb-4 text-sm">
            At Thirst Trap Lemonade, we believe that little moments make big
            memories. Whether you meet us at a festival or invite us to your
            backyard bash, we promise to deliver:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li><strong>Fresh‑squeezed lemons:</strong> We squeeze every lemon to order, so your drink is always bright and flavourful.</li>
            <li><strong>Good vibes:</strong> Friendly service, upbeat music and plenty of smiles.</li>
            <li><strong>Creative flavours:</strong> From classic to daring, our menu is packed with fruity infusions and cotton‑candy swirls.</li>
            <li><strong>Customisation:</strong> Need a special colour or flavour for your event? We love working with hosts to craft signature sips.</li>
            <li><strong>Transparent pricing:</strong> We discuss all the details before your event so there are no surprises—just refreshing drinks and happy guests.</li>
          </ul>
          <p className="mt-4 text-sm">Thanks for supporting our small business. We can’t wait to raise a glass with you!</p>
        </div>
      </section>
    </Layout>
  )
}