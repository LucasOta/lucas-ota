import { Github, Linkedin, BookOpen } from 'lucide-react'

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/LucasOta",
    icon: Github,
    description: "Check out my code"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lucas-mat%C3%ADas-ota%C3%B1o-363167172/",
    icon: Linkedin,
    description: "Let's connect professionally"
  },
  {
    name: "Medium",
    url: "https://medium.com/@lucasotano",
    icon: BookOpen,
    description: "Read my thoughts"
  }
]

export default function Contact() {
  return (
    <section className="py-20 px-6 md:px-12 bg-background/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
        <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities and conversations about technology, 
          product development, and the future of software.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/20 rounded-lg hover:bg-accent/20 transition-colors group min-w-[200px] justify-center"
              >
                <Icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-medium text-accent">{link.name}</div>
                  <div className="text-sm text-secondary">{link.description}</div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}