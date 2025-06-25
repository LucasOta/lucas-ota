const skills = [
  "React", "Next.js", "Node.js", "TypeScript", "Angular", "NestJS", 
  "SQL", "MongoDB", "TRPC", "Microfrontends", "AI-powered workflows", 
  "Frontend architecture", "System integrations", "Team leadership"
]

export default function Skills() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent hover:bg-accent/20 transition-colors text-sm md:text-base font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}