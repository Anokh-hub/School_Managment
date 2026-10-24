import { ShieldCheck, Clock, Handshake, BookOpen } from "lucide-react";
import PageHeader from "../components/PageHeader";

const rules = [
    {
        icon: Clock,
        title: "Punctuality",
        description: "Students should arrive at school on time and follow the school timetable.",
    },
    {
        icon: ShieldCheck,
        title: "Discipline",
        description: "Students should follow the school's instructions and maintain discipline.",
    },
    {
        icon: Handshake,
        title: "Respect",
        description: "Treat teachers, staff members, classmates, and school property respectfully.",
    },
    {
        icon: BookOpen,
        title: "Academic Responsibility",
        description: "Complete assignments and bring the required books and study materials.",
    },
];

export default function SchoolRules() {
    return (
        <>
            <PageHeader
                title="School Rules"
                subtitle="Guidelines to maintain a safe, respectful, and positive learning environment."
            />

            <section className="mx-auto max-w-7xl px-4 py-16">
                <div className="grid gap-6 sm:grid-cols-2">
                    {rules.map((rule, index) => {
                        const Icon = rule.icon;

                        return (
                            <article
                                key={rule.title}
                                className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                            >
                                <div className="h-fit rounded-xl bg-orange-100 p-3 text-orange-600">
                                    <Icon size={27} />
                                </div>

                                <div>
                                    <p className="text-sm font-bold text-orange-600">
                                        RULE {index + 1}
                                    </p>
                                    <h2 className="mt-1 text-xl font-bold text-blue-950">
                                        {rule.title}
                                    </h2>
                                    <p className="mt-3 leading-7 text-slate-600">
                                        {rule.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <p className="mt-8 rounded-xl bg-blue-50 p-5 text-sm leading-7 text-slate-600">
                    These are sample guidelines. Replace or supplement them with the
                    school's officially approved rules before publishing.
                </p>
            </section>
        </>
    );
}