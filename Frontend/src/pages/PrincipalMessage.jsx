import { Quote, GraduationCap } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function PrincipalMessage() {
    return (
        <>
            <PageHeader
                title="Principal's Message"
                subtitle="A message for our students, parents, and school community."
            />

            <section className="mx-auto max-w-5xl px-4 py-16">
                <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 md:grid-cols-[220px_1fr]">
                    <div className="flex flex-col items-center justify-center rounded-2xl bg-blue-50 p-8 text-center">
                        <div className="rounded-full bg-white p-5 text-blue-900 shadow-sm">
                            <GraduationCap size={55} />
                        </div>
                        <h3 className="mt-5 font-bold text-blue-950">
                            School Principal
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                            Principal's Office
                        </p>
                    </div>

                    <div>
                        <Quote size={38} className="text-orange-500" />

                        <h2 className="mt-4 text-2xl font-extrabold text-blue-950">
                            Dear Students and Parents
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Education is a continuous journey of learning, growth,
                            and discovery. We encourage every student to remain
                            curious, disciplined, respectful, and committed to
                            achieving their goals.
                        </p>

                        <p className="mt-4 leading-8 text-slate-600">
                            Parents and teachers play an important role in helping
                            students build confidence and develop good values.
                            Together, we can create a positive learning environment
                            for every child.
                        </p>

                        <p className="mt-6 font-bold text-blue-950">
                            With best wishes,
                        </p>
                        <p className="text-orange-600">Principal</p>
                    </div>
                </div>
            </section>
        </>
    );
}