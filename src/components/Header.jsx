import { useEffect, useState } from "react";
import { Menu, X} from "lucide-react";

const Header = ({ setActiveSection }) => {
    const navLinks = [
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // optional: close menu on ESC
    useEffect(() => {
        const onKeyDown = (e) => e.key === "Escape" && setIsMenuOpen(false);
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });

        setActiveSection?.(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`fixed bg-slate-950 top-0 left-0 right-0 z-50 transition-all duration-300 md:px-10 ${
                isScrolled ? "py-4" : "py-6"
            }`}
        >

            <div className="container mx-auto px-6 flex items-center justify-between">
                <button
                    onClick={() => scrollToSection("home")}
                    className="font-mono text-xl font-bold gradient-text"
                >
          <span className="bg-gradient-to-r from-cyan-500 to-blue-800 bg-clip-text text-transparent cursor-pointer">
            {"<Dev />"}
          </span>
                </button>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="cursor-pointer text-gray-500 hover:text-cyan-500 transition-colors duration-300 font-medium"
                        >
                            {link.name}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="cursor-pointer px-5 py-2 gradient-border border rounded-2xl text-cyan-500 font-medium opacity-80 hover:opacity-100 hover:shadow-cyan-500 hover:shadow-[0_0_20px_4px_rgba(34,211,238,0.6)] transition duration-300"
                    >
                        Contact
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen((p) => !p)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            <div
                onClick={() => setIsMenuOpen(false)}
                className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            />

            {/* Panel */}
            <div
                className={`md:hidden fixed top-15 right-0 h-[calc(100vh-4rem)] w-80 bg-slate-900 z-50
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-40" : "translate-x-full"}`}
            >
                <div className="pt-10 px-8">
                    <ul className="space-y-6">
                        {navLinks.map((link, index) => (
                            <li
                                key={link.id}
                                className={`transform transition-all duration-300
                  ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}
                                style={{ transitionDelay: `${index * 70}ms` }}
                            >
                                <button
                                    onClick={() => scrollToSection(link.id)}
                                    className="w-full text-left text-white text-2xl font-light hover:text-cyan-400 transition-colors"
                                >
                                    {link.name}
                                </button>
                            </li>
                        ))}

                        <li
                            className={`transform transition-all duration-300
                ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}
                            style={{ transitionDelay: `${navLinks.length * 70}ms` }}
                        >
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="text-left px-5 py-2 rounded-2xl border border-cyan-500/40 text-cyan-300 hover:text-cyan-200 hover:border-cyan-400 transition"
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
