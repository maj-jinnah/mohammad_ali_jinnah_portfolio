import {
    SiExpress,
    SiJavascript,
    SiMongodb,
    SiMongoose,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiSequelize,
    SiTypescript,
} from "react-icons/si";

const Skills = () => {
    // const skills = [
    //     { name: "AWS", level: 80 },
    //     { name: "Docker", level: 85 },
    //     { name: "Jest", level: 82 },
    // ];

    const skills = [
        {
            name: "JavaScript",
            icon: <SiJavascript className="text-yellow-400" />,
        },
        {
            name: "TypeScript",
            icon: <SiTypescript className="text-blue-400" />,
        },
        {
            name: "Node.js",
            icon: <SiNodedotjs className="text-green-500" />,
        },
        {
            name: "Express.js",
            icon: <SiExpress className="text-gray-300" />,
        },
        {
            name: "React",
            icon: <SiReact className="text-cyan-400" />,
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs className="text-gray-200" />,
        },
        {
            name: "PostgreSQL",
            icon: <SiPostgresql className="text-blue-500" />,
        },
        {
            name: "MySQL",
            icon: <SiMysql className="text-sky-400" />,
        },
        {
            name: "Prisma",
            icon: <SiPrisma className="text-white" />,
        },
        {
            name: "Sequelize",
            icon: <SiSequelize className="text-sky-400" />,
        },
        {
            name: "MongoDB",
            icon: <SiMongodb className="text-green-500" />,
        },
        {
            name: "Mongoose",
            icon: <SiMongoose className="text-green-500" />,
        },
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="container mx-auto">
                <div className="scroll-animate opacity-0">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-6">
                            Skills & Technologies
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-cyan mx-auto mb-8"></div>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Here are the technologies and tools I work with to
                            bring ideas to life
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        {/* Skills Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {skills.map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className="card-glow p-6 rounded-xl hover:border-cyan-500 hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 bg-cyan-500 transition-all duration-500"></div>
                                    <div className="flex justify-left items-center gap-5">
                                        <h3 className="text-5xl font-semibold text-foreground">
                                            {skill.icon}
                                        </h3>
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {skill.name}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
