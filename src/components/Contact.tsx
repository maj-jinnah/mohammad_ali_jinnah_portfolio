import emailjs from "emailjs-com";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import { useToast } from "../hooks/use-toast";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;


const Contact = () => {
    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if (formRef.current) {
                await emailjs.sendForm(
                    SERVICE_ID,
                    TEMPLATE_ID,
                    formRef.current,
                    PUBLIC_KEY
                );

                toast({
                    title: "Message sent successfully!",
                    description:
                        "Thanks for reaching out. I'll get back to you soon.",
                });

                setFormData({ name: "", email: "", message: "" });
            } else {
                throw new Error("Form not found");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            toast({
                title: "Error sending message",
                description: "Please try again later or contact me directly.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            content: "maj.jinnah1999@gmail.com",
            link: "mailto:maj.jinnah1999@gmail.com",
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            content: "+88015 5341 2880",
            link: "tel:+8801553412880",
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Kushita, Bangladesh",
            content: "Thanapara, Khoksa, Kushtia",
            link: "",
        },
    ];

    return (
        <section id="contact" className="section-padding">
            <div className="container mx-auto">
                <div className="scroll-animate opacity-0">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-6">
                            Let's Work Together
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-cyan mx-auto mb-8"></div>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Have a project in mind? Let's discuss how we can
                            bring your ideas to life. I'm always excited to work
                            on new challenges.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div className="card-glow p-8 rounded-xl">
                            <h3 className="text-2xl font-semibold text-foreground mb-6">
                                Send me a message
                            </h3>
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/20 rounded-lg focus:outline-none focus:border-electric-blue text-foreground placeholder-muted-foreground"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/20 rounded-lg focus:outline-none focus:border-electric-blue text-foreground placeholder-muted-foreground"
                                        placeholder="maj.jinnah1999@gmail.com"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/20 rounded-lg focus:outline-none focus:border-electric-blue text-foreground placeholder-muted-foreground resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <Send className="w-5 h-5" />
                                    )}
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Message"}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-foreground mb-6">
                                    Get in touch
                                </h3>
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    I'm currently available for freelance work
                                    and new opportunities. Whether you have a
                                    question or just want to say hi, I'll do my
                                    best to get back to you!
                                </p>
                            </div>

                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link}
                                        target={
                                            info.link.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            info.link.startsWith("http")
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className="flex items-center space-x-4 p-4 card-glow rounded-lg hover:scale-105 transition-all duration-300 group"
                                    >
                                        <div className="text-electric-blue group-hover:scale-110 transition-transform duration-300">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">
                                                {info.title}
                                            </h4>
                                            <p className="text-muted-foreground">
                                                {info.content}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="mt-12">
                                <h4 className="text-lg font-semibold text-foreground mb-4">
                                    Why work with me?
                                </h4>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start">
                                        <span className="text-electric-blue mr-2">
                                            ✓
                                        </span>
                                        Fast response times and clear
                                        communication
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-electric-blue mr-2">
                                            ✓
                                        </span>
                                        High-quality, scalable solutions
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-electric-blue mr-2">
                                            ✓
                                        </span>
                                        Collaborative approach to development
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-electric-blue mr-2">
                                            ✓
                                        </span>
                                        Post-launch support and maintenance
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
