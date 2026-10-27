import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, ChevronDown, ArrowRight } from "lucide-react";
import "../css/navbar.css";

const menus = [
    {
        label: "About Us",
        items: [
            ["About School", "/about-school"],
            ["School Inspiration", "/school-inspiration"],
            ["Principal's Message", "/principal-message"],
            ["School Projects", "/school-projects"],
            ["Address", "/address"],
            ["Shabad", "/shabad"],
            ["School Prayer", "/school-prayer"],
            ["Pledge", "/pledge"],
        ],
    },
    {
        label: "Admission",
        items: [
            ["Admission Procedure", "/admission-procedure"],
            ["Examination", "/examination"],
            ["School Rules", "/school-rules"],
            ["Fees Structure", "/fees-structure"],
            ["Admission & Withdrawal", "/admission-withdrawal"],
        ],
    },
    {
        label: "Facilities",
        items: [
            ["Computer Lab", "/computer-lab"],
            ["Library", "/library"],
        ],
    },
    {
        label: "Academics",
        items: [
            ["Curriculum", "/curriculum"],
            ["School Staff", "/school-staff"],
            ["Syllabus", "/syllabus"],
            ["Results", "/results"],
        ],
    },
    {
        label: "Activities",
        items: [
            ["Photo Gallery", "/photo-gallery"],
            ["Achievements", "/achievements"],
        ],
    },
];

const isDesktop = () => typeof window !== "undefined" && window.innerWidth >= 1024;

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef(null);
    const { pathname } = useLocation();

    const closeMenu = () => {
        setMobileOpen(false);
        setOpenMenu("");
    };

    // shrink + blur when page is scrolled
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // close on outside click / Escape
    useEffect(() => {
        const onDown = (e) => {
            if (headerRef.current && !headerRef.current.contains(e.target)) setOpenMenu("");
        };
        const onKey = (e) => e.key === "Escape" && closeMenu();
        document.addEventListener("mousedown", onDown);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onDown);
            document.removeEventListener("keydown", onKey);
        };
    }, []);

    // close on route change
    useEffect(() => {
        closeMenu();
    }, [pathname]);

    const linkClass = ({ isActive }) =>
        `nav-underline block whitespace-nowrap px-3 py-3 text-sm font-semibold transition-colors ${isActive ? "is-active text-amber-600" : "text-slate-900 hover:text-amber-600"
        }`;

    return (
        <header
            ref={headerRef}
            className={`font-body sticky top-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/90 shadow-lg shadow-slate-900/10 backdrop-blur-md"
                    : "bg-white shadow-sm"
                }`}
        >
            {/* Top strip */}
            <div
                className={`topbar-anim overflow-hidden bg-gradient-to-r from-[#06101e] via-[#0a192f] to-[#0f274a] px-4 text-xs text-blue-100 transition-all duration-300 sm:text-sm ${scrolled ? "max-h-0 py-0 opacity-0" : "max-h-10 py-2 opacity-100"
                    }`}
            >
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
                    <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                        Welcome to Our School
                    </span>
                    <span className="hidden text-amber-200 sm:inline">
                        Learning • Discipline • Achievement
                    </span>
                </div>
            </div>

            <div
                className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 ${scrolled ? "py-2" : "py-3"
                    }`}
            >
                {/* Logo */}
                <Link to="/" onClick={closeMenu} className="group flex min-w-0 items-center gap-3">
                    <span className="rounded-xl bg-gradient-to-br from-[#0a192f] to-[#1e3a6a] p-2 text-amber-300 shadow-md transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                        <GraduationCap size={scrolled ? 28 : 34} className="transition-all duration-300" />
                    </span>
                    <span className="min-w-0">
                        <span className="font-display block text-lg font-extrabold text-slate-900 sm:text-xl">
                            Our School
                        </span>
                        <span className="block text-xs text-amber-600">Knowledge is Power</span>
                    </span>
                </Link>

                {/* Mobile toggle */}
                <button
                    type="button"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="rounded-lg p-2 text-slate-900 transition hover:bg-slate-100 active:scale-90 lg:hidden"
                    aria-label="Toggle navigation"
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? <X size={26} /> : <Menu size={26} />}
                </button>

                {/* Nav */}
                <nav
                    className={`${mobileOpen ? "nav-slide flex" : "hidden"
                        } absolute left-0 top-full max-h-[80vh] w-full flex-col overflow-y-auto border-t border-slate-200 bg-white px-4 pb-4 shadow-xl lg:static lg:flex lg:max-h-none lg:w-auto lg:flex-row lg:items-center lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
                >
                    <NavLink to="/" end onClick={closeMenu} className={linkClass}>
                        Home
                    </NavLink>

                    {menus.map((menu) => {
                        const isOpen = openMenu === menu.label;
                        const hasActive = menu.items.some(([, path]) => pathname.startsWith(path));

                        return (
                            <div
                                className="relative"
                                key={menu.label}
                                onMouseEnter={() => isDesktop() && setOpenMenu(menu.label)}
                                onMouseLeave={() => isDesktop() && setOpenMenu("")}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenMenu(isOpen ? "" : menu.label)}
                                    className={`nav-underline flex w-full items-center justify-between gap-1 px-3 py-3 text-left text-sm font-semibold transition-colors lg:w-auto ${hasActive ? "is-active text-amber-600" : "text-slate-900 hover:text-amber-600"
                                        }`}
                                    aria-expanded={isOpen}
                                    aria-haspopup="true"
                                >
                                    {menu.label}
                                    <ChevronDown
                                        size={15}
                                        className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-amber-500" : ""
                                            }`}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="dropdown-in rounded-xl bg-slate-50 py-2 lg:absolute lg:left-0 lg:top-full lg:z-50 lg:min-w-60 lg:border lg:border-slate-200 lg:bg-white lg:shadow-2xl lg:shadow-slate-900/15">
                                        {menu.items.map(([label, path], i) => (
                                            <Link
                                                key={path}
                                                to={path}
                                                onClick={closeMenu}
                                                style={{ animationDelay: `${i * 30}ms` }}
                                                className="nav-slide group mx-2 flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-slate-700 transition hover:bg-[#0a192f] hover:text-amber-300"
                                            >
                                                {label}
                                                <ArrowRight
                                                    size={14}
                                                    className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                                                />
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    <NavLink to="/contact-us" onClick={closeMenu} className={linkClass}>
                        Contact Us
                    </NavLink>

                    {/* CTA */}
                    <Link
                        to="/admission-procedure"
                        onClick={closeMenu}
                        className="btn-shine mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-2.5 text-sm font-bold text-slate-900 shadow-md shadow-amber-500/20 transition hover:-translate-y-0.5 hover:shadow-lg lg:ml-3 lg:mt-0"
                    >
                        Apply Now
                        <ArrowRight size={16} />
                    </Link>
                </nav>
            </div>
        </header>
    );
}