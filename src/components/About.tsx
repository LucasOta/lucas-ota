export default function About() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-6 text-secondary">
              I'm a developer who believes that the best products come from close collaboration between tech and product. 
              My background is technical, but I'm always thinking about the bigger picture — the users, the business, and the impact.
            </p>
            <p className="text-lg leading-relaxed text-secondary">
              Based in Argentina, working remotely with international teams. On a mission to make every pull request count.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-accent/20 rounded-full flex items-center justify-center">
              <span className="text-accent text-lg font-medium">Portrait placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}