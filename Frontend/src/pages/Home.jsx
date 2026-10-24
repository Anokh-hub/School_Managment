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

const facilities = [
    {
        icon: Monitor,
        title: "Computer Lab",
        description: "Technology-based learning to build digital skills.",
        link: "/computer-lab",
    },
    {
        icon: Library,
        title: "Library",
        description: "A learning space for reading and discovering knowledge.",
        link: "/library",
    },
    {
        icon: FlaskConical,
        title: "Academic Learning",
        description: "A strong foundation through classroom learning.",
        link: "/curriculum",
    },
    {
        icon: Trophy,
        title: "Achievements",
        description: "Celebrating students' efforts and accomplishments.",
        link: "/achievements",
    },
];

export default function Home() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-blue-950 text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/95 to-blue-900/60" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:py-28 lg:grid-cols-2 lg:py-32">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/40 bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-300">
                            <GraduationCap size={18} />
                            Welcome to Our School
                        </span>

                        <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                            Building a Brighter
                            <span className="block text-orange-400">
                                Future Together
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
                            We believe that education builds character, develops
                            confidence, and prepares students for a brighter future.
                            Discover a place where learning and values grow together.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/about-school"
                                className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
                            >
                                Explore Our School
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                to="/admission-procedure"
                                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-bold transition hover:bg-white hover:text-blue-950"
                            >
                                Admission Details
                            </Link>
                        </div>
                    </div>

                    {/* School image placeholder */}
                    <div className="relative">
                        <div className="absolute -inset-4 rounded-3xl bg-orange-400/20 blur-2xl" />

                        <div className="relative flex min-h-72 flex-col items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-sm sm:min-h-96">
                            <GraduationCap
                                size={88}
                                strokeWidth={1.2}
                                className="text-orange-400"
                            />

                            <h2 className="mt-5 text-2xl font-bold">
                                Welcome to Our Campus
                            </h2>

                            <p className="mt-3 max-w-sm text-sm leading-7 text-blue-100">
                                Replace this section with your school's real building
                                photograph.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4">
                <div className="grid grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-4">
                    {[
                        { icon: Users, title: "Student Focus", text: "Individual growth" },
                        { icon: BookOpen, title: "Quality Learning", text: "Strong foundations" },
                        { icon: Trophy, title: "Achievements", text: "Celebrate success" },
                        { icon: GraduationCap, title: "Education", text: "Lifelong learning" },
                    ].map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="border-b border-r border-slate-100 p-5 text-center sm:p-7"
                            >
                                <Icon className="mx-auto text-orange-500" size={30} />

                                <h3 className="mt-3 font-bold text-blue-950">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* About School */}
            <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-28">
                <div className="flex min-h-72 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-100 to-blue-100 p-8 sm:min-h-96">
                    <div className="text-center">
                        <BookOpen className="mx-auto text-blue-900" size={70} />

                        <p className="mt-5 text-xl font-bold text-blue-950">
                            Knowledge • Values • Success
                        </p>

                        <p className="mt-2 text-sm text-slate-600">
                            Add a real classroom or school photograph here.
                        </p>
                    </div>
                </div>

                <div>
                    <span className="font-bold uppercase tracking-widest text-orange-600">
                        About Our School
                    </span>

                    <h2 className="mt-4 text-3xl font-extrabold leading-tight text-blue-950 sm:text-4xl">
                        Education That Inspires Every Student
                    </h2>

                    <p className="mt-6 leading-8 text-slate-600">
                        Our school is committed to creating a positive learning
                        environment where students can develop academic knowledge,
                        good values, discipline, and confidence.
                    </p>

                    <p className="mt-4 leading-8 text-slate-600">
                        We encourage students to participate in academic and
                        extracurricular activities and to develop skills that help
                        them succeed in life.
                    </p>

                    <Link
                        to="/about-school"
                        className="mt-7 inline-flex items-center gap-2 font-bold text-orange-600 hover:text-orange-700"
                    >
                        Read More About Us
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            {/* Facilities */}
            <section className="bg-slate-100 px-4 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <span className="font-bold uppercase tracking-widest text-orange-600">
                            What We Offer
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
                            Our Facilities
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600">
                            Explore the facilities and learning opportunities available
                            to our students.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {facilities.map((facility) => {
                            const Icon = facility.icon;

                            return (
                                <Link
                                    to={facility.link}
                                    key={facility.title}
                                    className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="inline-flex rounded-xl bg-orange-100 p-4 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                                        <Icon size={30} />
                                    </div>

                                    <h3 className="mt-5 text-xl font-bold text-blue-950">
                                        {facility.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        {facility.description}
                                    </p>

                                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600">
                                        Learn More
                                        <ArrowRight size={16} />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Announcements */}
            <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2">
                <div>
                    <span className="font-bold uppercase tracking-widest text-orange-600">
                        Latest Updates
                    </span>

                    <h2 className="mt-3 text-3xl font-extrabold text-blue-950">
                        School Announcements
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                        Important notices and announcements can be published here
                        for students and parents.
                    </p>

                    <div className="mt-7 rounded-2xl border border-slate-200 p-5">
                        <div className="flex items-start gap-4">
                            <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
                                <CalendarDays size={25} />
                            </div>

                            <div>
                                <h3 className="font-bold text-blue-950">
                                    School Notices
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Official school notices and upcoming events will be
                                    displayed in this section.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center rounded-3xl bg-blue-950 p-8 text-white sm:p-12">
                    <GraduationCap size={45} className="text-orange-400" />

                    <h2 className="mt-5 text-3xl font-extrabold">
                        Begin Your Learning Journey
                    </h2>

                    <p className="mt-4 leading-7 text-blue-100">
                        Find information about admission procedures, examinations,
                        school rules, and fee structure.
                    </p>

                    <Link
                        to="/admission-procedure"
                        className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-bold transition hover:bg-orange-600"
                    >
                        Admission Information
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
}