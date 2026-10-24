import { Lightbulb, BookOpen, Users, Leaf } from "lucide-react";
import PageHeader from "../components/PageHeader";

const projects = [
    {
        icon: Lightbulb,
        title: "Science Projects",
        description:
            "Student models, experiments, and activities that encourage scientific thinking.",
    },
    {
        icon: BookOpen,
        title: "Educational Projects",
        description:
            "Classroom assignments and learning activities that strengthen subject knowledge.",
    },
    {
        icon: Users,
        title: "Community Activities",
        description:
            "Activities that encourage teamwork, responsibility, and cooperation.",
    },
    {
        icon: Leaf,
        title: "Environmental Awareness",
        description:
            "Projects that promote cleanliness, environmental awareness, and care for nature.",
    },
];

export default function SchoolProjects() {
    return (
        <>
            <PageHeader
                title="School Projects"
                subtitle="Explore educational projects and student activities."
            />

            <section className="mx-auto max-w-7xl px-4 py-16">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {projects.map((project) => {
                        const Icon = project.icon;

                        return (
                            <article
                                key={project.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="inline-flex rounded-xl bg-orange-100 p-4 text-orange-600">
                                    <Icon size={30} />
                                </div>

                                <h2 className="mt-5 text-xl font-bold text-blue-950">
                                    {project.title}
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {project.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-10 rounded-2xl bg-blue-50 p-6 sm:p-8">
                    <h2 className="text-xl font-bold text-blue-950">
                        Project Gallery
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">
                        Add actual school project photographs and descriptions here
                        when they are provided by the school.
                    </p>
                </div>
            </section>
        </>
    );
}