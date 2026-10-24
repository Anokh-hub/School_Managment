
import PageHeader from "../components/PageHeader";
import { BookOpen, Calculator, FlaskConical, Languages } from "lucide-react";

const subjects = [
    {
        icon: Languages,
        title: "Languages",
        description: "Language learning, reading, writing and communication.",
    },
    {
        icon: Calculator,
        title: "Mathematics",
        description: "Numerical understanding, reasoning and problem-solving.",
    },
    {
        icon: FlaskConical,
        title: "Science",
        description: "Scientific concepts, observation and practical understanding.",
    },
    {
        icon: BookOpen,
        title: "Humanities",
        description: "Learning about society, history, geography and civic life.",
    },
];

export default function Curriculum() {
    return (
        <>
            <PageHeader
                title="Curriculum"
                subtitle="Academic learning and overall student development."
            />

            <section className="mx-auto max-w-7xl px-4 py-14">
                <h2 className="text-3xl font-bold text-blue-950">
                    Our Academic Curriculum
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-gray-600">
                    This page introduces the academic subjects and learning approach
                    followed by the school. The final subject list and class-wise
                    curriculum should be verified with the school.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {subjects.map((subject) => {
                        const Icon = subject.icon;

                        return (
                            <div
                                key={subject.title}
                                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100"
                            >
                                <Icon size={36} className="text-orange-500" />
                                <h3 className="mt-5 text-xl font-bold text-blue-950">
                                    {subject.title}
                                </h3>
                                <p className="mt-3 leading-7 text-gray-600">
                                    {subject.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10 rounded-2xl bg-blue-950 p-8 text-white">
                    <h3 className="text-xl font-bold">Class-wise Curriculum</h3>
                    <p className="mt-3 leading-7 text-blue-100">
                        Class-wise subjects, syllabus and academic guidelines can be
                        published here after receiving the school's official details.
                    </p>
                </div>
            </section>
        </>
    );
}
