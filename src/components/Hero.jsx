import {Github, Linkedin, Mail, ChevronDown,FileUser} from "lucide-react";

const Hero = ({setActiveSection}) => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });

        setActiveSection?.(sectionId);
    };
    return (
        <section
            id="home"
            className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse bg-cyan-500/10"/>
                <div
                    className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse bg-purple-500/10"
                    style={{animationDelay: "1s"}}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Greeting */}
                    <p className="font-mono text-cyan-400 mb-4 animate-[fadeIn_0.8s_ease-out_both]">
                        Hello, I&apos;m
                    </p>

                    {/* Name */}
                    <h1
                        className="text-5xl md:text-7xl font-bold mb-6 animate-[fadeIn_0.8s_ease-out_both]"
                        style={{animationDelay: "0.1s"}}
                    >
                        <span className="text-white">Naum </span>
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Developer
        </span>
                    </h1>

                    {/* Title */}
                    <div
                        className="font-mono text-xl md:text-2xl text-white/70 mb-8 animate-[fadeIn_0.8s_ease-out_both]"
                        style={{animationDelay: "0.2s"}}
                    >
                        <span className="text-cyan-400">{">"}</span> Full Stack Developer
                        <span className="animate-pulse ml-1">|</span>
                    </div>

                    {/* Description */}
                    <p
                        className="text-lg text-white/60 max-w-2xl mx-auto mb-10 text-balance animate-[fadeIn_0.8s_ease-out_both]"
                        style={{animationDelay: "0.3s"}}
                    >
                        Crafting elegant digital experiences with clean code and innovative solutions.
                        Passionate about building scalable applications that make a difference.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-[fadeIn_0.8s_ease-out_both]"
                        style={{animationDelay: "0.4s"}}
                    >
                        <a
                            onClick={()=>scrollToSection("projects")}
                            className="px-8 py-3 font-semibold rounded-lg font-bold cursor-pointer
                     bg-gradient-to-r from-cyan-500 to-purple-600
                     transition-all duration-300 hover:scale-105
                     hover:shadow-[0_0_30px_6px_rgba(34,211,238,0.45)]"
                        >
                            View My Work
                        </a>

                        <a
                            onClick={()=>scrollToSection("contact")}
                            className="px-8 py-3 font-semibold rounded-lg text-white cursor-pointer
                     border border-white/20
                     bg-white/5 backdrop-blur-md
                     transition-all duration-300
                     hover:shadow-[0_0_30px_6px_rgba(34,211,238,0.35)] hover:border-cyan-400/40"
                        >
                            Get In Touch
                        </a>
                    </div>

                    {/* Social Links */}
                    <div
                        className="flex gap-6 justify-center animate-[fadeIn_0.8s_ease-out_both]"
                        style={{animationDelay: "0.5s"}}
                    >
                        <a
                            href="https://github.com/NaumVlavceski"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg
                     bg-white/5 border border-white/10 backdrop-blur-md
                     text-white/60 transition-all duration-300
                     hover:text-cyan-400 hover:shadow-[0_0_25px_4px_rgba(34,211,238,0.35)]"
                        >
                            <Github size={24}/>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/naum-vlavcheski-2bb621377/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg
                     bg-white/5 border border-white/10 backdrop-blur-md
                     text-white/60 transition-all duration-300
                     hover:text-cyan-400 hover:shadow-[0_0_25px_4px_rgba(34,211,238,0.35)]"
                        >
                            <Linkedin size={24}/>
                        </a>

                        <a
                            href="mailto:nvlavceski542@gmail.com"
                            className="p-3 rounded-lg
                     bg-white/5 border border-white/10 backdrop-blur-md
                     text-white/60 transition-all duration-300
                     hover:text-cyan-400 hover:shadow-[0_0_25px_4px_rgba(34,211,238,0.35)]"
                        >
                            <Mail size={24}/>
                        </a>
                        <a
                            href="https://www.canva.com/design/DAG4JlQ1GWk/qm8U4y-7Ol5HCkyvv7B8wQ/view?utm_content=DAG4JlQ1GWk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h18c3ddffcb"
                            target="_blank"
                            className="p-3 rounded-lg
                     bg-white/5 border border-white/10 backdrop-blur-md
                     text-white/60 transition-all duration-300
                     hover:text-cyan-400 hover:shadow-[0_0_25px_4px_rgba(34,211,238,0.35)]"
                        >
                            <FileUser size={24}/>
                        </a>

                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown size={32} className="text-white/50"/>
                </div>
            </div>

            {/* Tailwind custom keyframes using arbitrary animation name (needs keyframes in CSS) */}
            <style>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
        </section>

    )
}
export default Hero