import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
    BookOpen,
    Target,
    Eye,
    Heart,
    Users,
    Monitor,
    Library,
    Trophy,
    ShieldCheck,
    Lightbulb,
    GraduationCap,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

/* ============ YAHAN APNA REAL DATA DAALO ============ */

// Numbers sirf example hain. School ke asli numbers se badal do.
const stats = [
    { value: 1000, suffix: "+", label: "Students" },
    { value: 50, suffix: "+", label: "Teachers & Staff" },
    { value: 25, suffix: "+", label: "Years of Service" },
    { value: 100, suffix: "%", label: "Dedication" },
];

const values = [
    { icon: Target, title: "Our Mission", description: "To provide quality education and help students develop knowledge, confidence, and responsible behaviour." },
    { icon: Eye, title: "Our Vision", description: "To create an environment where students can learn, think independently, and prepare for the future." },
    { icon: Heart, title: "Our Values", description: "We encourage discipline, honesty, respect, cooperation, and a lifelong love of learning." },
];

const reasons = [
    { icon: Users, title: "Caring Teachers", text: "Teachers who guide every student with patience and attention." },
    { icon: ShieldCheck, title: "Disciplined Environment", text: "A safe and orderly campus where students learn good habits." },
    { icon: Monitor, title: "Computer Lab", text: "Hands-on technology learning to build practical digital skills." },
    { icon: Library, title: "Library", text: "A quiet space to read, explore, and build a love for books." },
    { icon: Trophy, title: "Activities & Achievements", text: "Sports, cultural and academic events that celebrate talent." },
    { icon: Lightbulb, title: "Strong Foundation", text: "Concept-based classroom learning that prepares students for exams and life." },
];

const journey = [
    { icon: BookOpen, title: "Learn", text: "Strong basics through structured classroom teaching." },
    { icon: Lightbulb, title: "Practice", text: "Regular tests, homework and practical work." },
    { icon: Users, title: "Participate", text: "Events, sports and competitions build confidence." },
    { icon: GraduationCap, title: "Grow", text: "Students leave ready for higher studies and life." },
];

const explore = [
    { label: "School Inspiration", path: "/school-inspiration" },
    { label: "Principal's Message", path: "/principal-message" },
    { label: "School Projects", path: "/school-projects" },
    { label: "School Prayer", path: "/school-prayer" },
    { label: "Pledge", path: "/pledge" },
    { label: "Address", path: "/address" },
];

/* ============ Count-up number ============ */
function CountUp({ value, suffix = "" }) {
    const ref = useRef(null);
    const [n, setN] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                io.disconnect();
                const start = performance.now();
                const duration = 1600;
                const tick = (now) => {
                    const p = Math.min((now - start) / duration, 1);
                    setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
                    if (p < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
            },
            { threshold: 0.4 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [value]);

    return (
        <span ref={ref}>
            {n.toLocaleString()}
            {suffix}
        </span>
    );
}

function SectionTitle({ eyebrow, title, text }) {
    return (
        <div className="mx-auto mb-12 max-w-2xl text-center">
            <Reveal>
                <span className="font-bold tracking-wide text-amber-600">{eyebrow}</span>
            </Reveal>
            <Reveal delay={120}>
                <h2 className="font-display mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">{title}</h2>
            </Reveal>
            {text && (
                <Reveal delay={240}>
                    <p className="mt-4 leading-7 text-slate-600">{text}</p>
                </Reveal>
            )}
        </div>
    );
}

export default function AboutSchool() {
    return (
        <div className="font-body overflow-hidden bg-slate-50">
            <PageHeader
                title="About Our School"
                subtitle="Learn about our educational approach, values, and commitment to students."
            />

            {/* ============ Intro ============ */}
            <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    <Reveal variant="from-left">
                        <div className="relative flex min-h-72 items-center justify-center overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-amber-50 via-slate-50 to-blue-50/80 p-10 shadow-sm">
                            <div className="animate-drift pointer-events-none absolute left-6 top-6 h-20 w-20 rounded-full bg-amber-400/20 blur-xl" />
                            <div className="animate-drift pointer-events-none absolute bottom-6 right-6 h-24 w-24 rounded-full bg-blue-500/15 blur-xl" style={{ animationDelay: "-5s" }} />
                            <BookOpen size={100} className="animate-float relative text-[#0a192f]" />
                        </div>
                    </Reveal>

                    <div>
                        <Reveal variant="from-right">
                            <p className="font-bold tracking-wide text-amber-600">Welcome to Our School</p>
                        </Reveal>
                        <Reveal variant="from-right" delay={120}>
                            <h2 className="font-display mt-3 text-3xl font-extrabold text-slate-900">A Place to Learn and Grow</h2>
                        </Reveal>
                        <Reveal variant="from-right" delay={240}>
                            <p className="mt-5 leading-8 text-slate-600">
                                Our school aims to support students through classroom learning, practical activities, and opportunities for personal development.
                            </p>
                        </Reveal>
                        <Reveal variant="from-right" delay={340}>
                            <p className="mt-4 leading-8 text-slate-600">
                                We believe education is not limited to textbooks. Good habits, discipline, curiosity, and respect are important parts of a student's development.
                            </p>
                        </Reveal>
                    </div>
                </div>

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {values.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <Reveal key={item.title} delay={i * 140} variant="zoom">
                                <article className="card-lift group h-full rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition hover:border-amber-300 hover:shadow-md">
                                    <div className="icon-wiggle inline-flex rounded-xl bg-amber-50 p-3 text-amber-600 transition-colors group-hover:bg-[#0a192f] group-hover:text-amber-300">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="font-display mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                                    <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                                    <span className="mt-5 block h-0.5 w-10 rounded bg-amber-400 transition-all duration-500 group-hover:w-20" />
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            {/* ============ Stats ============ */}
            <section className="relative bg-[#071326] px-4 py-16 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-[#06101e] via-[#0a192f] to-[#0f274a]" />
                <div className="animate-drift pointer-events-none absolute -left-16 top-0 h-60 w-60 rounded-full bg-amber-400/15 blur-3xl" />
                <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">
                    {stats.map((s, i) => (
                        <Reveal key={s.label} delay={i * 120} variant="zoom">
                            <p className="font-display text-4xl font-extrabold text-amber-300 sm:text-5xl">
                                <CountUp value={s.value} suffix={s.suffix} />
                            </p>
                            <p className="mt-2 text-sm text-blue-100">{s.label}</p>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ============ Why choose us ============ */}
            <section className="border-y border-slate-200/60 bg-slate-100/70 px-4 py-20">
                <div className="mx-auto max-w-7xl">
                    <SectionTitle
                        eyebrow="Why Choose Us"
                        title="What Makes Our School Special"
                        text="A balanced environment that supports studies, character and confidence."
                    />
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {reasons.map((r, i) => {
                            const Icon = r.icon;
                            return (
                                <Reveal key={r.title} delay={(i % 3) * 120} variant="zoom">
                                    <div className="card-lift group flex h-full gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-amber-300 hover:shadow-md">
                                        <div className="icon-wiggle h-fit shrink-0 rounded-xl bg-amber-50 p-3 text-amber-600 transition-colors group-hover:bg-[#0a192f] group-hover:text-amber-300">
                                            <Icon size={26} />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-lg font-bold text-slate-900">{r.title}</h3>
                                            <p className="mt-2 text-sm leading-7 text-slate-600">{r.text}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ============ Journey ============ */}
            <section className="mx-auto max-w-7xl px-4 py-20">
                <SectionTitle
                    eyebrow="Our Approach"
                    title="A Student's Journey With Us"
                    text="From the first day to the last, every step is designed to help students grow."
                />
                <div className="relative grid gap-8 md:grid-cols-4">
                    <div className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden border-t-2 border-dashed border-amber-300 md:block" />
                    {journey.map((j, i) => {
                        const Icon = j.icon;
                        return (
                            <Reveal key={j.title} delay={i * 150}>
                                <div className="group relative text-center">
                                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#0a192f] to-[#1e3a6a] text-amber-300 shadow-lg shadow-slate-900/15 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110">
                                        <Icon size={30} />
                                    </div>
                                    <h3 className="font-display mt-5 text-xl font-bold text-slate-900">{j.title}</h3>
                                    <p className="mt-2 text-sm leading-7 text-slate-600">{j.text}</p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            {/* ============ Principal teaser ============ */}
            <section className="px-4 pb-20">
                <Reveal variant="zoom">
                    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#071326] to-[#0f274a] p-8 text-white shadow-xl shadow-slate-900/15 sm:p-12">
                        <div className="animate-drift pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-amber-400/15 blur-3xl" />
                        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                            <div>
                                <Sparkles className="animate-float text-amber-300" size={36} />
                                <h2 className="font-display mt-4 text-2xl font-extrabold sm:text-3xl">A Message From Our Principal</h2>
                                <p className="mt-3 max-w-xl leading-7 text-blue-100">
                                    Read our Principal's words about the school's goals and the future of our students.
                                </p>
                            </div>
                            <Link
                                to="/principal-message"
                                className="btn-shine inline-flex shrink-0 items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-bold text-slate-900 transition hover:-translate-y-0.5 hover:bg-amber-300 shadow-md shadow-amber-400/20"
                            >
                                Read Message
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* ============ Explore more ============ */}
            <section className="border-t border-slate-200/60 bg-slate-100/70 px-4 py-20">
                <div className="mx-auto max-w-5xl">
                    <SectionTitle eyebrow="Know More" title="Explore About Us" />
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {explore.map((e, i) => (
                            <Reveal key={e.path} delay={(i % 3) * 100}>
                                <Link
                                    to={e.path}
                                    className="card-lift group flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-5 py-4 font-semibold text-slate-900 shadow-sm transition hover:border-amber-300 hover:text-amber-600"
                                >
                                    {e.label}
                                    <ArrowRight size={18} className="text-amber-500 transition-transform duration-300 group-hover:translate-x-1.5" />
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ CTA ============ */}
            <section className="px-4 py-20 text-center">
                <Reveal>
                    <GraduationCap size={48} className="animate-float mx-auto text-amber-500" />
                    <h2 className="font-display mt-4 text-3xl font-extrabold text-slate-900">Become a Part of Our School</h2>
                    <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
                        Learn about the admission process, fees, and school rules.
                    </p>
                    <Link
                        to="/admission-procedure"
                        className="btn-shine animate-ring mt-7 inline-flex items-center gap-2 rounded-full bg-[#0a192f] px-7 py-3 font-bold text-amber-300 transition hover:-translate-y-0.5 hover:bg-[#071326] shadow-lg shadow-slate-900/15"
                    >
                        Admission Information
                        <ArrowRight size={18} />
                    </Link>
                </Reveal>
            </section>
        </div>
    );
}