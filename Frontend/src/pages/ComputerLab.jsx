
import PageHeader from "../components/PageHeader";
import { Monitor, Wifi, ShieldCheck, BookOpen } from "lucide-react";

const facilities = [
    {
        icon: Monitor,
        title: "Modern Computers",
        description:
            "Students can learn computer fundamentals and practice practical exercises.",
    },
    {
        icon: Wifi,
        title: "Internet Facility",
        description:
            "Internet access can support educational research and digital learning.",
    },
    {
        icon: ShieldCheck,
        title: "Safe Learning",
        description:
            "Students are guided to use computers and digital resources responsibly.",
    },
    {
        icon: BookOpen,
        title: "Practical Learning",
        description:
            "Practical sessions help students develop basic computer skills.",
    },
];

export default function ComputerLab() {
    return (
        <>
            <PageHeader
                title="Computer Lab"
                subtitle="Technology-enabled learning for our students."
            />

            <section className="mx-auto max-w-7xl px-4 py-14">
                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                    <div>
                        <p className="font-semibold uppercase tracking-widest text-orange-500">
                            Digital Education
                        </p>
                        <h2 className="mt-3 text-3xl font-bold text-blue-950">
                            Learning Through Technology
                        </h2>
                        <p className="mt-5 leading-8 text-gray-600">
                            Our computer lab page provides information about computer
                            education, practical learning and digital resources available
                            to students.
                        </p>
                        <p className="mt-3 leading-8 text-gray-600">
                            Actual computer counts, equipment and facilities can be added
                            after confirmation from the school.
                        </p>
                    </div>

                    <div className="flex min-h-72 items-center justify-center rounded-3xl bg-blue-950 p-10 text-white">
                        <Monitor size={120} strokeWidth={1.2} />
                    </div>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {facilities.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <Icon size={34} className="text-orange-500" />
                                <h3 className="mt-4 text-lg font-bold text-blue-950">
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
