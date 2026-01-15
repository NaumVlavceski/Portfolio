const About = () => {

    return (
        <section id={'about'} className="min-h-screen py-10 bg-slate-950 text-white px-10 lg:px-30">
            <div className="justify-items-center text-6xl font-bold py-10">
                <div className="font-mono">Who I Am</div>
            </div>
            <div className="grid lg:gap-10 lg:grid-cols-2 grid-cols-1 lg:py-15 text-gray-400 text-lg">
                <div>
                    <div className="mb-5">I’m a motivated full-stack developer with a strong passion for building clean, functional, and user-focused web applications. I’m currently in my final year of college, expected to graduate in one year, and actively preparing to transition into a professional development role.
                    </div>
                    <div className="mb-5">Although I don’t yet have formal work experience, I’ve spent several years developing real-world projects, exploring modern web technologies, and continuously improving my skills through hands-on practice. I enjoy turning ideas into working solutions, writing maintainable code, and learning best practices used in real production environments.
                    </div>
                    <div className="mb-5">I’m actively seeking an internship or junior developer position where I can contribute, learn from experienced engineers, and grow as part of a collaborative team. Outside of coding, I enjoy experimenting with new technologies, improving existing projects, and staying engaged with the developer community.
                    </div>
                </div>
                <div>
                    <div className="bg-sky-950 rounded-t-xl p-2">
                        <div className="bg-red-500 rounded-full mx-1 inline-block w-3 h-3"></div>
                        <div className="bg-yellow-500 rounded-full mx-1 inline-block w-3 h-3"></div>
                        <div className="bg-green-500 rounded-full mx-1 inline-block w-3 h-3"></div>
                        <span className="text-gray-400 ml-5">about.json</span>
                    </div>
                    <div>
                        <code>
                            <div className="p-6 text-sm lg:text-lg">
                                <div className="text-gray-500">{"{"}</div>
                                <div className="ml-5"><span className="text-cyan-500">"name":</span> <span
                                    className="text-purple-500">"Naum Developer"</span><span>,</span></div>
                                <div className="ml-5"><span className="text-cyan-500">"role":</span> <span
                                    className="text-purple-500">"Full Stack Developer"</span><span>,</span></div>
                                <div className="ml-5"><span className="text-cyan-500">"location":</span> <span
                                    className="text-purple-500">"Macedonia Ohrid"</span><span>,</span></div>
                                <div className="ml-5"><span className="text-cyan-500">"education":</span> <span
                                    className="text-purple-500">"FINKI"</span><span>,</span></div>
                                <div className="ml-5"><span className="text-cyan-500">"interests":</span> <span>[</span>
                                </div>
                                <div className="ml-10"><span className="text-purple-500">"Web Development"</span>
                                    <span>,</span></div>
                                <div className="ml-10"><span
                                    className="text-purple-500">"Mobile Development"</span><span>,</span></div>
                                <div className="ml-10"><span className="text-purple-500">"Data Analyst"</span></div>
                                <div className="ml-10"><span>],</span></div>
                                <div className="ml-5"><span className="text-cyan-500">"available":</span>
                                    <span>true</span></div>
                                <div className="text-gray-500">{"}"}</div>
                            </div>

                        </code>

                    </div>
                </div>
            </div>
        </section>

    )
}
export default About