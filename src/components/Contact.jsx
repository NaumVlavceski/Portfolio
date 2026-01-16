import {Send, Mail, MapPin,FileUser} from "lucide-react";
import emailJs from "@emailjs/browser";
import {useRef, useState} from "react";
const Contact = () => {

    const formRef = useRef(null);
    const [status,setStatus] = useState({loading:false,msg:"",ok:null});
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const onSubmit =async (e)=>{
        e.preventDefault();
        setStatus({loading: true,msg:"",ok:null})
        try {
            await emailJs.sendForm(SERVICE_ID,TEMPLATE_ID,formRef.current,{
                publicKey:PUBLIC_KEY
            });
            setStatus({loading: false, msg: "Thank you for reaching out!  \n" +
                    "I’ve received your message and will reply shortly.✅", ok: true });

            formRef.current.reset();
        }catch (err){
            console.error("EmailJS error:",err);
            setStatus({loading: false,msg: "Failed to send ❌",ok:false});
        }finally {
            setTimeout(()=>{
                setStatus({loading:false,msg:"",ok:null})
            },5000)
        }
    }

    return (
        <section id={'contact'} className="min-h-screen py-10 bg-slate-950 text-white px-10 md:px-70">
            <div className="justify-items-center text-6xl font-bold py-10">
                <div>Let's Connect</div>
                <div className="text-lg text-center mt-10 text-gray-400">I'm always interested in new
                    opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my
                    best to get back to you!
                </div>
            </div>
            <div className="grid md:grid-cols-2">
                <div>
                    <div className="space-y-20">
                        <div>
                            <Mail
                                className="inline-block w-15 h-15 p-3 rounded-xl align-top text-cyan-500 bg-cyan-950"/>
                            <div className="inline-block space-y-1">
                                <div className="pl-5 text-2xl font-bold">Email</div>
                                <a href='mailto:nvlavceski542@gmail.com'
                                   className="pl-5 text-gray-400 hover:text-cyan-500">nvlavceski542@gmail.com</a>
                            </div>
                        </div>
                        <div>
                            <MapPin
                                className="inline-block w-15 h-15 p-3 rounded-xl align-top text-cyan-500 bg-cyan-950"/>
                            <div className="inline-block space-y-1">
                                <div className="pl-5 text-2xl font-bold">Location</div>
                                <span
                                   className="pl-5 text-gray-400 ">Macedonia, Ohrid</span>
                            </div>
                        </div>
                        <div>
                            <code>
                                <div><span className="text-cyan-500">const</span> <span className="text-gray-400">status = {"{"}</span></div>
                                <div><span className="text-gray-400">available:</span> <span className="text-green-500">true</span></div>
                                <div><span className="text-gray-400">{"};"}</span></div>
                            </code>
                        </div>
                    </div>
                </div>
                <form className="space-y-6" ref={formRef} onSubmit={onSubmit}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-foreground mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="form_name"
                            required
                            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground"
                            placeholder="your@email.com"
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
                            required
                            rows={5}
                            name="message"
                            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                            placeholder="Your message..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-8 py-4 bg-gradient-to-r from-cyan-300 to-purple-600 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                        {status.loading ? "Sending..." : "Send Message"}
                        <Send size={18} />
                    </button>
                    {status.msg && (
                        <p className={status.ok ? "text-green-600" : "text-red-600"}>
                            {status.msg}
                        </p>
                    )}
                </form>
            </div>
            <a
                href="/CV%20Naum%20Vlavceski.pdf"
                download={"CV Naum Vlavcheski.pdf"}
                className="absolute right-2 scale-150 text-slate-950"
            >
                <FileUser size={24}/>
            </a>
        </section>
    )
}
export default Contact