import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const fullText = "Full Stack Developer";

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setText(fullText.substring(0, index + 1));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    const scrollToAbout = () => {
        document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 ">
                <div className="animate-fade-up">
                    <div className="mb-8">
                        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-electric-blue to-neon-cyan p-1 animate-float relative">
                            <div className="w-full h-full rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center border border-white/10">
                                <span className="text-4xl font-bold text-gradient">
                                    {"<J />"}
                                </span>
                            </div>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-blue to-neon-cyan opacity-30 blur-md animate-pulse"></div>
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="block text-gradient drop-shadow-2xl">
                            Mohammad Ali Jinnah
                        </span>
                    </h1>

                    <div className="text-xl sm:text-2xl lg:text-3xl text-white/80 mb-8 h-12 flex items-center justify-center">
                        <span className="font-mono drop-shadow-xl">
                            {text}
                            {isTyping && (
                                <span className="inline-block w-0.5 h-6 bg-electric-blue ml-1 animate-pulse drop-shadow-lg"></span>
                            )}
                        </span>
                    </div>

                    <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-lg">
                        I am a backend-focused full-stack developer who
                        specializes in services, APIs, and data models. Most of
                        my work involves JavaScript and TypeScript, using
                        Node.js on the server and Next.js on the client. This
                        allows me to efficiently deliver full-stack applications
                        without the need to switch to other programming
                        languages. I focus on building systems that are easy to
                        understand, easy to operate, and easy to extend.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <button
                            onClick={() =>
                                document
                                    .querySelector("#projects")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="btn-primary drop-shadow-xl hover:drop-shadow-2xl"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() =>
                                document
                                    .querySelector("#contact")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="px-8 py-3 border-2 border-electric-blue/80 text-electric-blue bg-black/20 backdrop-blur-sm rounded-lg font-semibold hover:bg-electric-blue hover:text-white transition-all duration-300 drop-shadow-xl"
                        >
                            Get In Touch
                        </button>
                    </div>

                    <div className="flex justify-center space-x-6 mb-16">
                        <a
                            href="https://github.com/maj-jinnah"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-electric-blue transition-colors p-3 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:border-electric-blue/50 hover:scale-110 transform duration-300 drop-shadow-xl"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/maj-jinnah/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-electric-blue transition-colors p-3 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:border-electric-blue/50 hover:scale-110 transform duration-300 drop-shadow-xl"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:maj.jinnah1999@gmail.com"
                            className="text-white/70 hover:text-electric-blue transition-colors p-3 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:border-electric-blue/50 hover:scale-110 transform duration-300 drop-shadow-xl"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <button
                        onClick={scrollToAbout}
                        className="absolute transform -translate-x-1/2 text-electric-blue animate-bounce p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:border-electric-blue/50 transition-all duration-300"
                    >
                        <ChevronDown size={32} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
