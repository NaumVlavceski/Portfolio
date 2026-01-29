import {Code2, Database, Globe, Palette, Smartphone, TabletSmartphone, Workflow} from "lucide-react";

const Skills = () => {

    const skillCategories = [
        {
            icon: Code2,
            title: "Frontend Development",
            skills: ['React', 'Java Script', 'HTML', 'CSS', 'Tailwind CSS'],
            color: 'from-blue-500 to-blue-950'
        },
        {
            icon: Database,
            title: "Backend Development",
            skills: ['Python', 'Java', 'Django', 'SpringBoot', 'PostgreSQL', 'MySQL', 'REST APIs'],
            color: 'from-cyan-500 to-cyan-950'
        },
        {
            icon: Workflow,
            title: "DevOps & Tools",
            skills: ['Docker', 'Git', 'GitHub', 'CI/CD', 'AWS'],
            color: 'from-green-500 to-blue-950'
        },
        {
            icon: Smartphone,
            title: "Mobile Development",
            skills: ['Flutter', 'React Native', 'Mobile UI/UX'],
            color: 'from-pink-500 to-pink-950'
        },
        {
            icon: Globe,
            title: "Web Technologies",
            skills: ['Vite', 'Firebase'],
            color: 'from-slate-500 to-blue-950'
        },
        {
            icon: Palette,
            title: "Design & UI/UX",
            skills: ['Figma', 'Responsive Design', 'User Research', 'Prototyping'],
            color: 'from-purple-500 to-purple-950'
        },

    ]
    return (
        <section id={'skills'} className="min-h-screen py-10 bg-slate-950 text-white px-10 lg:px-30">
            <div className="justify-items-center text-6xl font-bold py-10">
                <div>Skills</div>
            </div>
            <div className="grid gap-20 lg:grid-cols-3">
                {skillCategories.map(item =>
                    <div
                        className="bg-blue-950 border-3 border-blue-800 p-5 rounded-2xl hover:scale-103 group h-full transition-transform duration-300">
                        <div className={`bg-gradient-to-b ${item.color} inline-block p-2 scale-130 rounded-xl group-hover:scale-140 transition-transform duration-300`}>
                            <item.icon/>
                        </div>
                        <div className="py-4 font-bold text-2xl">
                            {item.title}</div>
                        <div className="flex flex-wrap gap-2">
                            {item.skills.map(skill => (
                                <span
                                    className="px-3 py-1.5 bg-gradient-to-r from-slate-50 to-slate-100 text-gray-700 rounded-full text-sm font-medium hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600 transition-colors cursor-default"
                                >{skill}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
export default Skills