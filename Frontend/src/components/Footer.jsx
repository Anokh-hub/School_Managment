import { Link } from "react-router-dom";
import {
    GraduationCap,
    MapPin,
    Phone,
    Mail,
    ArrowUpRight,
    ArrowUp,
} from "lucide-react";
import Reveal from "./Reveal";
import "../css/navbar.css";

const quickLinks = [
    ["Home", "/"],
    ["About School", "/about-school"],
    ["Admission Procedure", "/admission-procedure"],
    ["School Staff", "/school-staff"],
    ["Results", "/results"],
    ["Photo Gallery", "/photo-gallery"],
];

const exploreLinks = [
    ["Computer Lab", "/computer-lab"],
    ["Library", "/library"],
    ["Curriculum", "/curriculum"],
    ["Contact Us", "/contact-us"],
];

const linkClass =
    "group inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-1.5 hover:text-amber-300";

export default function Footer() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="font-body relative overflow-hidden bg-[#071326] text-white">
            {/* animated gold line on top */}
            <div className="topbar-anim h-1 bg-gradient-to-r from-amber-400 via-blue-400 to-amber-400" />

            {/* background glow */}
            <div className="animate-drift pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="animate-drift pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" style={{ animationDelay: "-6s" }} />

            <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
                {/* School information */}
                <Reveal>
                    <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 p-2 text-slate-900 shadow-lg shadow-amber-500/20 transition-transform duration-300 hover:-rotate-6 hover:scale-105">
                            <GraduationCap size={28} />
                        </div>
                        <div>
                            <h2 className="font-display text-lg font-bold">Our School</h2>
                            <p className="text-xs text-amber-300">Knowledge is Power</p>
                        </div>
                    </div>

                    <p className="text-sm leading-7 text-blue-100/90">
                        We aim to provide quality education, encourage creativity,
                        and help every student develop knowledge, confidence,
                        and discipline.
                    </p>
                </Reveal>

                {/* Quick links */}
                <Reveal delay={120}>
                    <h3 className="font-display mb-5 text-lg font-bold">
                        Quick Links
                        <span className="mt-2 block h-0.5 w-10 rounded bg-amber-400" />
                    </h3>

                    <ul className="space-y-3 text-sm text-blue-100/80">
                        {quickLinks.map(([label, path]) => (
                            <li key={path}>
                                <Link to={path} className={linkClass}>
                                    <ArrowUpRight
                                        size={14}
                                        className="text-amber-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                {/* Contact details */}
                <Reveal delay={240}>
                    <h3 className="font-display mb-5 text-lg font-bold">
                        Contact Information
                        <span className="mt-2 block h-0.5 w-10 rounded bg-amber-400" />
                    </h3>

                    <ul className="space-y-4 text-sm text-blue-100/80">
                        {[
                            { icon: MapPin, text: "School address will be added here." },
                            { icon: Phone, text: "School phone number" },
                            { icon: Mail, text: "School email address" },
                        ].map(({ icon: Icon, text }) => (
                            <li key={text} className="group flex items-start gap-3">
                                <span className="rounded-lg bg-[#0f274a] p-2 text-amber-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-900">
                                    <Icon size={16} />
                                </span>
                                <span className="pt-1.5">{text}</span>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                {/* Explore */}
                <Reveal delay={360}>
                    <h3 className="font-display mb-5 text-lg font-bold">
                        Explore
                        <span className="mt-2 block h-0.5 w-10 rounded bg-amber-400" />
                    </h3>

                    <ul className="space-y-3 text-sm text-blue-100/80">
                        {exploreLinks.map(([label, path]) => (
                            <li key={path}>
                                <Link to={path} className={linkClass}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        to="/admission-procedure"
                        className="btn-shine mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:-translate-y-0.5 shadow-md shadow-amber-400/20"
                    >
                        Apply Now
                        <ArrowUpRight size={16} />
                    </Link>
                </Reveal>
            </div>

            {/* Bottom bar */}
            <div className="relative border-t border-slate-800/80 px-4 py-5">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-slate-300 sm:flex-row">
                    <span>© {new Date().getFullYear()} Our School. All rights reserved.</span>

                    <button
                        type="button"
                        onClick={scrollTop}
                        aria-label="Back to top"
                        className="group inline-flex items-center gap-2 rounded-full border border-amber-300/40 px-4 py-2 text-amber-300 transition hover:bg-amber-400 hover:text-slate-900"
                    >
                        Back to top
                        <ArrowUp size={15} className="transition-transform duration-300 group-hover:-translate-y-1" />
                    </button>
                </div>
            </div>
        </footer>
    );
}