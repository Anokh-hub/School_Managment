
import PageHeader from "../components/PageHeader";
import { BookOpen, BookMarked, Search, GraduationCap } from "lucide-react";

const features = [
    {
        icon: BookOpen,
        title: "Reading Resources",
        description:
            "A place for students to develop reading habits and explore educational material.",
    },
    {
        icon: BookMarked,
        title: "Academic Books",
        description:
            "Information about textbooks and reference materials can be displayed here.",
    },
    {
        icon: Search,
        title: "Knowledge & Research",
        description:
            "Students can use learning resources to support their academic studies.",
    },
    {
        icon: GraduationCap,
        title: "Learning Support",
        description:
            "Reading and reference material can support learning across different subjects.",
    },
];

export default function Library() {
    return (
        <>
            <PageHeader
                title="School Library"
                subtitle="Encouraging reading, curiosity and lifelong learning."
            />

            <section className="mx-auto max-w-7xl px-4 py-14">
                <div className="rounded-3xl bg-orange-50 p-8 md:p-12">
                    <BookOpen size={48} className="text-orange-500" />
                    <h2 className="mt-5 text-3xl font-bold text-blue-950">
                        Explore the World of Books
                    </h2>
                    <p className="mt-4 max-w-3xl leading-8 text-gray-600">
                        The library section introduces students and parents to the
                        school's reading and academic resources. Confirmed details such
                        as book collections, library timings and rules can be added here.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                            >
                                <Icon size={32} className="text-orange-500" />
                                <h3 className="mt-4 font-bold text-blue-950">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
