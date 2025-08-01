import Layout from '@/components/Layout'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for reaching out! We will be in touch soon.')
  }
  return (
    <Layout
      title="Contact Us"
      description="Get in touch with Thirst Trap Lemonade to book us for your next event, ask about our flavours or just say hi. We're ready to bring good vibes and great drinks to you!"
    >
      <section className="py-12 px-4">
        <h1 className="text-4xl font-script text-center text-dark mb-8">Get in Touch</h1>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-script text-dark mb-4">We're here for you</h2>
            <p className="mb-3 text-sm">
              Ready to book Thirst Trap Lemonade for your event or have questions about our menu? Fill out the form or contact us directly.
            </p>
            <p className="mb-2 text-sm"><strong>Email:</strong> <a href="mailto:info@thirsttrapplemonade.com" className="text-secondary hover:text-dark">info@thirsttrapplemonade.com</a></p>
            <p className="mb-2 text-sm"><strong>Phone:</strong> <a href="tel:5551234567" className="text-secondary hover:text-dark">555‑123‑4567</a></p>
            <p className="mb-2 text-sm"><strong>Location:</strong> We're mobile! Catch us at festivals and events across the state.</p>
            <p className="mb-2 text-sm">
              Follow us on
              <a
                href="https://www.instagram.com/thirsttrap.lemonade/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-dark ml-1"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
              for the latest pop‑ups and flavours.
            </p>
          </div>
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="event"
                placeholder="Event Type (optional)"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="How can we help?"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="bg-primary text-dark px-6 py-3 rounded-full font-bold hover:bg-secondary hover:text-white transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}