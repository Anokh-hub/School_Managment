import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    Menu,
    X,
    GraduationCap,
    ChevronDown,
} from "lucide-react";

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

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState("");

    const closeMenu = () => {
        setMobileOpen(false);
        setOpenMenu("");
    };

    const linkClass = ({ isActive }) =>
        `block whitespace-nowrap px-3 py-3 text-sm font-semibold transition ${isActive
            ? "text-orange-600"
            : "text-slate-700 hover:text-orange-600"
        }`;

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="bg-blue-950 px-4 py-2 text-xs text-white sm:text-sm">
                <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2">
                    <span>Welcome to Our School</span>
                    <span>Learning • Discipline • Achievement</span>
                </div>
            </div>

            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="flex min-w-0 items-center gap-3"
                >
                    <span className="rounded-xl bg-orange-100 p-2 text-orange-600">
                        <GraduationCap size={34} />
                    </span>

                    <span className="min-w-0">
                        <span className="block text-lg font-extrabold text-blue-950 sm:text-xl">
                            Our School
                        </span>
                        <span className="block text-xs text-slate-500">
                            Knowledge is Power
                        </span>
                    </span>
                </Link>

                <button
                    type="button"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="rounded-lg p-2 text-blue-950 hover:bg-slate-100 lg:hidden"
                    aria-label="Toggle navigation"
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? <X size={26} /> : <Menu size={26} />}
                </button>

                <nav
                    className={`${mobileOpen ? "flex" : "hidden"
                        } absolute left-0 top-full max-h-[80vh] w-full flex-col overflow-y-auto border-t bg-white px-4 pb-4 shadow-lg lg:static lg:flex lg:max-h-none lg:w-auto lg:flex-row lg:items-center lg:overflow-visible lg:border-0 lg:p-0 lg:shadow-none`}
                >
                    <NavLink to="/" end onClick={closeMenu} className={linkClass}>
                        Home
                    </NavLink>

                    {menus.map((menu) => (
                        <div className="relative" key={menu.label}>
                            <button
                                type="button"
                                onClick={() =>
                                    setOpenMenu(
                                        openMenu === menu.label ? "" : menu.label
                                    )
                                }
                                className="flex w-full items-center justify-between gap-1 px-3 py-3 text-left text-sm font-semibold text-slate-700 hover:text-orange-600 lg:w-auto"
                                aria-expanded={openMenu === menu.label}
                            >
                                {menu.label}
                                <ChevronDown size={15} />
                            </button>

                            {openMenu === menu.label && (
                                <div className="rounded-lg bg-slate-50 py-2 lg:absolute lg:left-0 lg:top-full lg:z-50 lg:min-w-56 lg:bg-white lg:shadow-xl">
                                    {menu.items.map(([label, path]) => (
                                        <Link
                                            key={path}
                                            to={path}
                                            onClick={closeMenu}
                                            className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <NavLink
                        to="/contact-us"
                        onClick={closeMenu}
                        className={linkClass}
                    >
                        Contact Us
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}