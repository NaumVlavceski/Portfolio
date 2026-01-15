import {Folder, Github, ExternalLink} from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Restaurant Platform",
            description: "A fully featured restaurant management platform featuring QR-based table ordering, real-time order tracking for waiters, and administrative dashboard.",
            platforms: ['Python', 'React', 'Tailwind CSS', 'PostgreSQL'],
            webLink: 'https://restorantp.netlify.app/',
            gitHub: 'https://github.com/NaumVlavceski/RestaurantProject'
        },
        {
            title: "Bookenda",
            description: "Platform for creating and booking future events.",
            platforms: ['Python', 'Java Script', 'CSS', 'HTML', 'Static DB'],
            webLink: 'https://bookenda.onrender.com/',
            gitHub: 'https://github.com/NaumVlavceski/Bookenda'
        },
    ]
    const otherProjects = [
        {
            title: "Weather API",
            description: "Weather app with 7-day forecasts.",
            platforms: ['Java Script', 'CSS', 'HTML', 'Weather API'],
            gitHub: 'https://github.com/NaumVlavceski/Weather-Project'
        },
    ]
    return (
        <section id={'projects'} className="min-h-screen py-10 bg-slate-950 text-white px-10 lg:px-30">
            <div className="justify-items-center text-6xl font-bold py-10">
                <div>Projects</div>
            </div>
            <div className="space-y-8 mb-20">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border border-cyan-900 rounded-xl p-8 hover:scale-101 transition-all duration-300 group"
                    >
                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <Folder className="text-cyan-500" size={24}/>
                                    <h3 className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.platforms.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-gray-900 rounded-full text-sm font-mono text-cyan-500 hover:cursor-default hover:text-cyan-400"
                                        >
                          {tech}
                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex lg:flex-col gap-4 items-start lg:items-end justify-start">
                                <a
                                    href={project.gitHub}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg bg-cyan-950 hover:text-cyan-500 transition-colors duration-300"
                                >
                                    <Github size={20}/>
                                </a>
                                <a
                                    href={project.webLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg bg-cyan-950 hover:text-cyan-500 transition-colors duration-300"
                                >
                                    <ExternalLink size={20}/>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h3 className="text-2xl font-bold text-center mb-8">
                    Other <span className="gradient-text">Noteworthy Projects</span>
                </h3>
                <div className="grid md:grid-cols-2">
                    {otherProjects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-card rounded-xl p-6 hover:scale-101 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex justify-between">
                                <Folder className="text-cyan-500 mb-4" size={24}/>
                                <a
                                    href={project.gitHub}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-cyan-950 hover:text-cyan-500 transition-colors duration-300"
                                >
                                    <Github size={20}/>
                                </a>
                                <div></div>
                            </div>
                            <h4 className="text-3xl font-bold  mb-2">
                                {project.title}
                            </h4>

                            <p className="text-gray-400 text-lg mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.platforms.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-md text-cyan-400 px-2 bg-blue-950 rounded-full"
                                    >
                        {tech}
                      </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects