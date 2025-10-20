import { Code, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
    const highlights = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Clean Code",
            description: "Writing maintainable, scalable, and efficient code",
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "Full Stack",
            description: "End-to-end development from UI to database",
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Web Technologies",
            description: "Modern frameworks and cutting-edge solutions",
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Responsive Design",
            description: "Seamless experience across all devices",
        },
    ];

    return (
        <section id="about" className="section-padding bg-dark-card/30">
            <div className="container mx-auto">
                <div className="scroll-animate opacity-0">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-6">
                            About Me
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-cyan mx-auto mb-8"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                Passionate Developer & Problem Solver
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                With over 2 years of experience in full-stack
                                development, I specialize in creating robust,
                                scalable applications that deliver exceptional
                                user experiences. My journey began with a
                                curiosity for how things work, which evolved
                                into a passion for building solutions that make
                                a difference.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I thrive on challenges and continuously learn
                                new technologies to stay at the forefront of the
                                web development. Whether it's architecting
                                complex systems or solving critical problems, I
                                bring dedication and expertise to every project.
                            </p>
                            <div className="flex flex-wrap gap-3 pt-4">
                                {[
                                    "TypeScript",
                                    "Node.js",
                                    "Express",
                                    "React",
                                    "PostgreSQL",
                                    "MongoDB",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-electric-blue/10 text-electric-blue rounded-full text-sm font-medium border border-electric-blue/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="card-glow p-6 rounded-xl hover:scale-105 transition-all duration-300"
                                >
                                    <div className="text-electric-blue mb-4">
                                        {highlight.icon}
                                    </div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">
                                        {highlight.title}
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                        {highlight.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
