import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CinemaCity",
    description: "CinemaCity makes movie magic easy, book your favorite films online, watch trailers, and choose your perfect seat for a seamless, exciting, and comfortable cinema experience every time.",
    image: "/projects/project1.png",
    tags: ["React", "TalwindCSS", "JavaScript"],
    demoUrl: "https://cinemacity-self.vercel.app/",
    githubUrl: "https://github.com/Umar524-web/CinemaCity",
  },
  {
    id: 2,
    title: "Lux Beauty",
    description: "Lux-Beauty brings elegance to your fingertips, explore premium fragrances, lipsticks, perfumes, and skincare essentials online. Enhance your natural charm with trusted beauty products that redefine confidence and luxury.",
    image: "/projects/project2.png",
    tags: ["React", "TalwindCSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "DashMess",
    description: "Dashmesh brings deliciousness to your doorstep — order fresh and flavorful Pizza, Pasta, Dosa, Noodles, and more. Taste the joy of authentic food made with love and quality.",
    image: "/projects/project3.png",
    tags: ["React", "TalwindCSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          {" "}
          <span className="text-primary"> Projects </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-justify">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Umar524-web"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
