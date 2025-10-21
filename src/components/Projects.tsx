import { ExternalLink, Github } from "lucide-react";

const Projects = () => {

  const projects = [
    // {
    //   title: "E-Commerce Platform",
    //   description:
    //     "A full-stack e-commerce platform with product management, secure checkout, and payment integration using Bkash. Built using React, Next.js, Node.js, and MongoDB.",
    //   image: "/projects/kabbo.jpg",
    //   tech: ["React", "Next.js", "Node.js", "MongoDB", "Bkash"],
    //   live: "https://mecomui.vercel.app/",
    //   featured: true,
    // },
    // {
    //   title: "E-Commerce Dashboard",
    //   description:
    //     "A dashboard interface for managing e-commerce products, orders, and payments with secure admin login. Integrated with Bkash and MongoDB.",
    //   image: "/projects/dashboard.png",
    //   tech: ["React", "Next.js", "Node.js", "MongoDB", "Bkash"],
    //   live: "https://mcomadmin.vercel.app",
    //   featured: true,
    // },
    // {
    //   title: "Online Pharmacy Store",
    //   description:
    //     "A full-stack e-commerce website for selling drugs and medicines. Features include product filtering, payment via Bkash, and secure user authentication.",
    //   image: "/projects/memservice.png",
    //   tech: ["React", "Next.js", "MongoDB", "Bkash", "NextAuth"],
    //   live: "https://www.memservicebd.com",
    //   featured: true,
    // },
    {
      title: "FastLearn - Learning Platform",
      description:
        "FastLearn is a full-stack Learning Management System built entirely with Next.js. It enables users to explore courses, track their progress, and engage with interactive lessons, all in a seamless and dynamic interface",
      image: "/projects/fastlearn.png",
      tech: ["React", "Next.js", "MongoDB","Stripe", "NextAuth"],
      github: "https://github.com/maj-jinnah/fastlearn",
      live: "https://fastlearn-snowy.vercel.app/",
      featured: true,
    },
    {
      title: "Firstbnb - Booking App",
      description:
        "FirstBnB is a full-stack booking platform inspired by Airbnb, with real-time search and user authentication.It replicates the core functionality of Airbnb from exploring listings to booking and managing stays",
      image: "/projects/firstbnb.png",
      tech: ["React", "Next.js", "MongoDB", "NextAuth"],
      github: "https://github.com/maj-jinnah/firstbnb",
      live: "https://firstbnb.vercel.app/",
      featured: true,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section-padding bg-dark-card/30">
      <div className="container mx-auto">
        <div className="scroll-animate opacity-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-cyan mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on recently. Each one
              represents a unique challenge and solution.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group card-glow rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-electric-blue/20 backdrop-blur-sm rounded-full hover:bg-electric-blue/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-electric-blue/20 backdrop-blur-sm rounded-full hover:bg-electric-blue/30 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-electric-blue/10 text-electric-blue rounded-full text-sm font-medium border border-electric-blue/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
