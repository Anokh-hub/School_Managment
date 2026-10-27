import { useEffect, useRef } from "react";
import {
    ArrowRight,
    BookOpen,
    GraduationCap,
    Monitor,
    Trophy,
    Users,
    Library,
    FlaskConical,
    CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../index.css"; // ya isko apni index.css me paste/import kar do

/* Scroll karte hi element animate hota hai */
function Reveal({ children, delay = 0, variant = "", className = "" }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("is-visible");
                    io.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${variant} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

const facilities = [
    { icon: Monitor, title: "Computer Lab", description: "Technology-based learning to build digital skills.", link: "/computer-lab" },
    { icon: Library, title: "Library", description: "A learning space for reading and discovering knowledge.", link: "/library" },
    { icon: FlaskConical, title: "Academic Learning", description: "A strong foundation through classroom learning.", link: "/curriculum" },
    { icon: Trophy, title: "Achievements", description: "Celebrating students' efforts and accomplishments.", link: "/achievements" },
];

const highlights = [
    { icon: Users, title: "Student Focus", text: "Individual growth" },
    { icon: BookOpen, title: "Quality Learning", text: "Strong foundations" },
    { icon: Trophy, title: "Achievements", text: "Celebrate success" },
    { icon: GraduationCap, title: "Education", text: "Lifelong learning" },
];

export default function Home() {
    return (
        <div className="font-body overflow-hidden bg-slate-50">
            {/* ================= Hero ================= */}
            <section className="relative bg-[#071326] text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-[#06101e] via-[#0a192f] to-[#0f274a]" />

                {/* floating background shapes */}
                <div className="animate-drift pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl" />
                <div className="animate-drift pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" style={{ animationDelay: "-5s" }} />
                <div className="animate-float pointer-events-none absolute right-[12%] top-16 hidden h-5 w-5 rounded-full bg-amber-400/80 lg:block" />
                <div className="animate-float pointer-events-none absolute left-[46%] bottom-20 hidden h-3 w-3 rounded-full bg-blue-300/60 lg:block" style={{ animationDelay: "-3s" }} />

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:py-28 lg:grid-cols-2 lg:py-32">
                    <div>
                        <span
                            className="hero-in inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <GraduationCap size={18} />
                            C R K Inter College
                        </span>

                        <h1
                            className="font-display hero-in mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
                            style={{ animationDelay: "0.3s" }}
                        >
                            Building a Brighter
                            <span className="text-shine block text-amber-300">Future Together</span>
                        </h1>

                        <p
                            className="hero-in mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg"
                            style={{ animationDelay: "0.55s" }}
                        >
                            We believe that education builds character, develops
                            confidence, and prepares students for a brighter future.
                            Discover a place where learning and values grow together.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/about-school"
                                className="hero-in btn-shine animate-ring inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3 font-bold text-slate-900 transition hover:-translate-y-0.5 hover:bg-amber-300 shadow-lg shadow-amber-400/20"
                                style={{ animationDelay: "0.8s" }}
                            >
                                Explore Our School
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                to="/admission-procedure"
                                className="hero-in inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-bold transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-900"
                                style={{ animationDelay: "0.95s" }}
                            >
                                Admission Details
                            </Link>
                        </div>
                    </div>

                    {/* School image */}
                    <div className="hero-img group relative min-h-72 overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-black/40 sm:min-h-96">
                        <div
                            className="animate-ken absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('/images/mainPage.jpeg')" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/85 via-black/20 to-transparent" />

                        <div className="relative flex min-h-72 flex-col items-center justify-center p-8 text-center sm:min-h-96">
                            <GraduationCap
                                size={88}
                                strokeWidth={1.2}
                                className="animate-float text-amber-300 drop-shadow-lg"
                            />
                            <h2 className="font-display mt-5 text-2xl font-bold text-white drop-shadow-lg">
                                Welcome to Our Campus
                            </h2>
                            <p className="mt-3 max-w-sm text-sm leading-7 text-white drop-shadow-md">
                                Welcome to our school, where learning, creativity, and
                                excellence come together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= Highlights ================= */}
            <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4">
                <Reveal variant="zoom">
                    <div className="grid grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-900/10 border border-slate-100 md:grid-cols-4">
                        {highlights.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <Reveal key={item.title} delay={150 + i * 120}>
                                    <div className="group h-full border-b border-r border-slate-100 p-5 text-center transition hover:bg-slate-50 sm:p-7">
                                        <Icon
                                            className="mx-auto text-amber-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                                            size={30}
                                        />
                                        <h3 className="mt-3 font-bold text-slate-900">{item.title}</h3>
                                        <p className="mt-1 text-xs text-slate-500 sm:text-sm">{item.text}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </Reveal>
            </section>

            {/* ================= About ================= */}
            <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-28">
                <Reveal variant="from-left">
                    <div className="relative flex min-h-72 items-center justify-center overflow-hidden rounded-3xl border border-white/20 p-8 shadow-xl shadow-slate-900/10 sm:min-h-96">
                        {/* Background Video (Crystal Clear) */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 h-full w-full object-cover"
                            src="/video/first.mp4"
                        />

                        {/* Subtle Dark Gradient (No Blur) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/85 via-[#071326]/40 to-transparent" />

                        {/* Content */}
                        <div className="relative text-center">
                            <BookOpen className="animate-float mx-auto text-amber-300 drop-shadow-lg" size={70} />
                            <p className="font-display mt-5 text-xl font-bold text-white drop-shadow-md">
                                Knowledge • Values • Success
                            </p>
                            <p className="mt-2 text-sm text-slate-200 drop-shadow">
                                Discover learning and growth in every step.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <div>
                    <Reveal variant="from-right">
                        <span className="font-bold tracking-wide text-amber-600">About Our School</span>
                    </Reveal>
                    <Reveal variant="from-right" delay={120}>
                        <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                            Education That Inspires Every Student
                        </h2>
                    </Reveal>
                    <Reveal variant="from-right" delay={240}>
                        <p className="mt-6 leading-8 text-slate-600">
                            Our school is committed to creating a positive learning
                            environment where students can develop academic knowledge,
                            good values, discipline, and confidence.
                        </p>
                    </Reveal>
                    <Reveal variant="from-right" delay={340}>
                        <p className="mt-4 leading-8 text-slate-600">
                            We encourage students to participate in academic and
                            extracurricular activities and to develop skills that help
                            them succeed in life.
                        </p>
                    </Reveal>
                    <Reveal variant="from-right" delay={440}>
                        <Link
                            to="/about-school"
                            className="group mt-7 inline-flex items-center gap-2 font-bold text-amber-600 hover:text-amber-700"
                        >
                            Read More About Us
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1.5" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* ================= Facilities ================= */}
            <section className="bg-slate-100/70 border-y border-slate-200/60 px-4 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <Reveal>
                            <span className="font-bold tracking-wide text-amber-600">What We Offer</span>
                        </Reveal>
                        <Reveal delay={120}>
                            <h2 className="font-display mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                                Our Facilities
                            </h2>
                        </Reveal>
                        <Reveal delay={240}>
                            <p className="mt-4 leading-7 text-slate-600">
                                Explore the facilities and learning opportunities available
                                to our students.
                            </p>
                        </Reveal>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {facilities.map((facility, i) => {
                            const Icon = facility.icon;

                            // Har box ke index ke anusaar uski video file ka naam yahan set karein
                            const cardVideos = [
                                "/video/computer.mp4",        // 1. Computer Lab ke liye
                                "/video/library.mp4",      // 2. Library ke liye
                                "/video/Acadmic.mp4",     // 3. Academic Learning ke liye
                                "/video/achievement.mp4", // 4. Achievements ke liye
                            ];

                            const videoSrc = cardVideos[i] || "/video/computer.mp4";

                            return (
                                <Reveal key={facility.title} delay={i * 130} variant="zoom">
                                    <Link
                                        to={facility.link}
                                        className="card-lift group relative block h-full overflow-hidden rounded-2xl border border-white/20 p-7 shadow-lg transition hover:scale-[1.02] hover:border-amber-400"
                                    >
                                        {/* Alag-alag video according to index */}
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            src={videoSrc}
                                        />

                                        {/* Dark Navy Overlay - Text aur Icon clear dikhne ke liye */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/85 to-[#071326]/65 transition-opacity duration-300 group-hover:opacity-85" />

                                        <div className="relative z-10 flex h-full flex-col justify-between">
                                            <div>
                                                <div className="icon-wiggle inline-flex rounded-xl bg-amber-400/20 p-4 text-amber-300 backdrop-blur-sm transition-colors group-hover:bg-amber-400 group-hover:text-slate-900">
                                                    <Icon size={30} />
                                                </div>

                                                <h3 className="font-display mt-5 text-xl font-bold text-white drop-shadow-sm">
                                                    {facility.title}
                                                </h3>

                                                <p className="mt-3 text-sm leading-7 text-slate-200">
                                                    {facility.description}
                                                </p>
                                            </div>

                                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-400 group-hover:text-amber-300">
                                                Learn More
                                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
                                            </span>
                                        </div>
                                    </Link>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= Announcements ================= */}
            <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2">
                <div>
                    <Reveal variant="from-left">
                        <span className="font-bold tracking-wide text-amber-600">Latest Updates</span>
                    </Reveal>
                    <Reveal variant="from-left" delay={120}>
                        <h2 className="font-display mt-3 text-3xl font-extrabold text-slate-900">
                            School Announcements
                        </h2>
                    </Reveal>
                    <Reveal variant="from-left" delay={220}>
                        <p className="mt-4 leading-7 text-slate-600">
                            Important notices and announcements can be published here
                            for students and parents.
                        </p>
                    </Reveal>

                    <Reveal variant="from-left" delay={340}>
                        <div className="card-lift mt-7 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="animate-float rounded-xl bg-amber-50 p-3 text-amber-600">
                                    <CalendarDays size={25} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">School Notices</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Official school notices and upcoming events will be
                                        displayed in this section.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <Reveal variant="from-right" delay={150}>
                    <div className="relative h-full overflow-hidden rounded-3xl border border-white/15 p-8 text-white sm:p-12 shadow-xl shadow-slate-900/10">
                        {/* Background Video */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                            src="/video/journey.mp4"
                        />

                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#071326]/90 via-[#0a192f]/85 to-[#0f274a]/80" />

                        {/* Background Glow */}
                        <div className="animate-drift pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-amber-400/15 blur-3xl" />

                        {/* Content */}
                        <div className="relative z-10 flex h-full flex-col justify-center">
                            <GraduationCap size={45} className="animate-float text-amber-300" />
                            <h2 className="font-display mt-5 text-3xl font-extrabold">
                                Begin Your Learning Journey
                            </h2>
                            <p className="mt-4 leading-7 text-blue-100">
                                Find information about admission procedures, examinations,
                                school rules, and fee structure.
                            </p>
                            <Link
                                to="/admission-procedure"
                                className="btn-shine mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-amber-400 px-6 py-3 font-bold text-slate-900 transition hover:-translate-y-0.5 hover:bg-amber-300 shadow-md shadow-amber-400/20"
                            >
                                Admission Information
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}