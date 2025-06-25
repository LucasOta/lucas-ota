export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="text-accent">Lucas Otaño</span>{' '}
          —
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-secondary">
          A full-stack developer with a product mindset.
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-secondary">
          I thrive at the intersection of code and business, translating real-world needs into meaningful software. 
          Currently diving deep into AI tools to streamline workflows and help teams ship smarter.
        </p>
      </div>
    </section>
  )
}