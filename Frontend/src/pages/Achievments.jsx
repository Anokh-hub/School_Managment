
import PageHeader from "../components/PageHeader";
import { Trophy, Star, Award, Medal } from "lucide-react";

const achievements = [
    {
        icon: Trophy,
        title: "Academic Excellence",
        description: "Student academic achievements and examination results.",
    },
    {
        icon: Medal,
        title: "Sports Achievements",
        description: "Sports participation, competitions and awards.",
    },
    {
        icon: Star,
        title: "Cultural Activities",
        description: "Achievements in cultural programmes and competitions.",
    },
    {
        icon: Award,
        title: "Awards & Recognition",
        description: "School and student awards verified by the school.",
    },
];

export default function Achievements() {
    return (
        <>
            <PageHeader
                title="Our Achievements"
                subtitle="Celebrating the efforts and accomplishments of our students."
            />

            <section className="mx-auto max-w-7xl px-4 py-14">
                <div className="rounded-3xl bg-blue-950 p-8 text-white md:p-12">
                    <Trophy size={48} className="text-orange-400" />
                    <h2 className="mt-5 text-3xl font-bold">Every Achievement Matters</h2>
                    <p className="mt-4 max-w-3xl leading-8 text-blue-100">
                        This page can showcase verified student achievements, competition
                        results, certificates and important school milestones.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {achievements.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                                <Icon size={36} className="text-orange-500" />
                                <h3 className="mt-5 text-lg font-bold text-blue-950">{item.title}</h3>
                                <p className="mt-3 leading-7 text-gray-600">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
