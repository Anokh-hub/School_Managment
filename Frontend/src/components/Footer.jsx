import { Link } from "react-router-dom";
import {
    GraduationCap,
    MapPin,
    Phone,
    Mail,
    ArrowUpRight,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-blue-950 text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
                {/* School information */}
                <div>
                    <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-lg bg-orange-500 p-2">
                            <GraduationCap size={28} />
                        </div>

                        <div>
                            <h2 className="text-lg font-bold">Our School</h2>
                            <p className="text-xs text-blue-200">
                                Knowledge is Power
                            </p>
                        </div>
                    </div>

                    <p className="text-sm leading-7 text-blue-100">
                        We aim to provide quality education, encourage creativity,
                        and help every student develop knowledge, confidence,
                        and discipline.
                    </p>
                </div>

                {/* Quick links */}
                <div>
                    <h3 className="mb-5 text-lg font-bold">Quick Links</h3>

                    <ul className="space-y-3 text-sm text-blue-100">
                        {[
                            ["Home", "/"],
                            ["About School", "/about-school"],
                            ["Admission Procedure", "/admission-procedure"],
                            ["School Staff", "/school-staff"],
                            ["Results", "/results"],
                            ["Photo Gallery", "/photo-gallery"],
                        ].map(([label, path]) => (
                            <li key={path}>
                                <Link
                                    to={path}
                                    className="inline-flex items-center gap-2 hover:text-orange-400"
                                >
                                    <ArrowUpRight size={14} />
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact details */}
                <div>
                    <h3 className="mb-5 text-lg font-bold">Contact Information</h3>

                    <ul className="space-y-4 text-sm text-blue-100">
                        <li className="flex items-start gap-3">
                            <MapPin className="mt-1 shrink-0 text-orange-400" size={19} />
                            <span>School address will be added here.</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <Phone className="shrink-0 text-orange-400" size={18} />
                            <span>School phone number</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <Mail className="mt-1 shrink-0 text-orange-400" size={18} />
                            <span>School email address</span>
                        </li>
                    </ul>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="mb-5 text-lg font-bold">Explore</h3>

                    <ul className="space-y-3 text-sm text-blue-100">
                        <li>
                            <Link to="/computer-lab" className="hover:text-orange-400">
                                Computer Lab
                            </Link>
                        </li>
                        <li>
                            <Link to="/library" className="hover:text-orange-400">
                                Library
                            </Link>
                        </li>
                        <li>
                            <Link to="/curriculum" className="hover:text-orange-400">
                                Curriculum
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="hover:text-orange-400">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-blue-800 px-4 py-5 text-center text-sm text-blue-200">
                © {new Date().getFullYear()} Our School. All rights reserved.
            </div>
        </footer>
    );
}