import { BookOpen, Target, Eye, Heart } from "lucide-react";
import PageHeader from "../components/PageHeader";

const values = [
    {
        icon: Target,
        title: "Our Mission",
        description:
            "To provide quality education and help students develop knowledge, confidence, and responsible behaviour.",
    },
    {
        icon: Eye,
        title: "Our Vision",
        description:
            "To create an environment where students can learn, think independently, and prepare for the future.",
    },
    {
        icon: Heart,
        title: "Our Values",
        description:
            "We encourage discipline, honesty, respect, cooperation, and a lifelong love of learning.",
    },
];

export default function AboutSchool() {
    return (
        <>
            <PageHeader
                title="About Our School"
                subtitle="Learn about our educational approach, values, and commitment to students."
            />

            <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    <div className="flex min-h-72 items-center justify-center rounded-3xl bg-orange-50 p-10">
                        <BookOpen size={100} className="text-orange-500" />
                    </div>

                    <div>
                        <p className="font-bold uppercase tracking-widest text-orange-600">
                            Welcome to Our School
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-blue-950">
                            A Place to Learn and Grow
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Our school aims to support students through classroom
                            learning, practical activities, and opportunities for
                            personal development.
                        </p>

                        <p className="mt-4 leading-8 text-slate-600">
                            We believe education is not limited to textbooks.
                            Good habits, discipline, curiosity, and respect are
                            important parts of a student's development.
                        </p>
                    </div>
                </div>

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {values.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="inline-flex rounded-xl bg-orange-100 p-3 text-orange-600">
                                    <Icon size={28} />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-blue-950">
                                    {item.title}
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    {item.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </section>
        </>
    );
}