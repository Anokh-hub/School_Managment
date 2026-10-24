import { BookOpen, CalendarDays, FileText } from "lucide-react";
import PageHeader from "../components/PageHeader";

const examInfo = [
    {
        icon: CalendarDays,
        title: "Examination Schedule",
        text: "Examination dates and timetables will be published here after confirmation by the school.",
    },
    {
        icon: BookOpen,
        title: "Preparation",
        text: "Students should follow the prescribed syllabus and instructions given by their teachers.",
    },
    {
        icon: FileText,
        title: "Results",
        text: "Students and parents can check the published examination results on the Results page.",
    },
];

export default function Examination() {
    return (
        <>
            <PageHeader
                title="Examination"
                subtitle="Examination information, schedules, and student guidelines."
            />

            <section className="mx-auto max-w-7xl px-4 py-16">
                <div className="grid gap-6 md:grid-cols-3">
                    {examInfo.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                            >
                                <div className="inline-flex rounded-xl bg-blue-50 p-4 text-blue-900">
                                    <Icon size={30} />
                                </div>
                                <h2 className="mt-5 text-xl font-bold text-blue-950">
                                    {item.title}
                                </h2>
                                <p className="mt-3 leading-7 text-slate-600">
                                    {item.text}
                                </p>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-10 rounded-2xl bg-orange-50 p-6 sm:p-8">
                    <h2 className="text-xl font-bold text-blue-950">
                        Examination Guidelines
                    </h2>
                    <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-700">
                        <li>Check the official examination timetable.</li>
                        <li>Follow the instructions issued by the school.</li>
                        <li>Contact the school office if you need clarification.</li>
                    </ul>
                </div>
            </section>
        </>
    );
}