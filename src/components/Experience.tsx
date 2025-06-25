const experiences = [
  {
    company: "CareHub",
    position: "Sr. Full Stack Developer",
    period: "Oct 2024 – Present",
    description: [
      "Leading development of healthcare management platform",
      "Implementing AI-powered workflow optimizations",
      "Mentoring junior developers and establishing best practices"
    ]
  },
  {
    company: "EV Jungle",
    position: "Technical Lead",
    period: "Nov 2023 – Sep 2024",
    description: [
      "Led technical architecture for electric vehicle marketplace",
      "Managed cross-functional team of 8+ developers",
      "Drove adoption of modern frontend frameworks and CI/CD practices"
    ]
  },
  {
    company: "Mediafly",
    position: "Full Stack Developer",
    period: "Apr 2022 – Apr 2023",
    description: [
      "Built scalable sales enablement platform features",
      "Optimized application performance and database queries",
      "Collaborated with product team on user experience improvements"
    ]
  },
  {
    company: "Cloud(x)",
    position: "Full Stack Developer",
    period: "Dec 2020 – Mar 2022",
    description: [
      "Developed cloud-native applications and microservices",
      "Implemented automated testing and deployment pipelines",
      "Contributed to system architecture and technical decisions"
    ]
  },
  {
    company: "Southworks",
    position: "Full Stack Developer",
    period: "May 2020 – Nov 2020",
    description: [
      "Built enterprise web applications for Fortune 500 clients",
      "Worked with modern JavaScript frameworks and cloud platforms",
      "Participated in agile development processes and code reviews"
    ]
  }
]

export default function Experience() {
  return (
    <section className="py-20 px-6 md:px-12 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="border border-accent/20 rounded-lg p-6 md:p-8 bg-background/30 hover:bg-background/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-primary">{exp.position}</h3>
                  <p className="text-lg text-accent font-medium">{exp.company}</p>
                </div>
                <span className="text-secondary font-medium mt-2 md:mt-0">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-secondary leading-relaxed flex items-start">
                    <span className="text-accent mr-3 mt-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}