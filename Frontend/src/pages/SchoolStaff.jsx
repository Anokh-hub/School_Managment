
import PageHeader from "../components/PageHeader";
import { Users, GraduationCap, HeartHandshake } from "lucide-react";

const roles = [
    {
        icon: GraduationCap,
        title: "Principal",
        description: "Academic leadership and overall school administration.",
    },
    {
        icon: Users,
        title: "Teaching Staff",
        description: "Teachers supporting students across academic subjects.",
    },
    {
        icon: HeartHandshake,
        title: "Support Staff",
        description: "Team members who help with the school's daily operations.",
    },
];

export default function SchoolStaff() {
    return (
        <>
            <PageHeader
                title="School Staff"
                subtitle="Meet the people who contribute to our school community."
            />

            <section className="mx-auto max-w-7xl px-4 py-14">
                <div className="text-center">
                    <p className="font-semibold uppercase tracking-widest text-orange-500">
                        Our Team
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-blue-950">
                        Dedicated to Student Growth
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                        This section can display the principal's and teachers' names,
                        photographs, qualifications and designations.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {roles.map((role) => {
                        const Icon = role.icon;

                        return (
                            <div
                                key={role.title}
                                className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm"
                            >
                                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-orange-50">
                                    <Icon size={30} className="text-orange-500" />
                                </div>
                                <h3 className="mt-5 text-xl font-bold text-blue-950">
                                    {role.title}
                                </h3>
                                <p className="mt-3 leading-7 text-gray-600">
                                    {role.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
