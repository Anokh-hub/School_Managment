import { Star, BookOpen, Heart } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function SchoolInspiration() {
    return (
        <>
            <PageHeader
                title="School Inspiration"
                subtitle="The ideas and values that guide our educational journey."
            />

            <section className="mx-auto max-w-5xl px-4 py-16">
                <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-12">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        <Star size={38} />
                    </div>

                    <h2 className="mt-6 text-center text-2xl font-extrabold text-blue-950 sm:text-3xl">
                        Inspiration Behind Our School
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-center leading-8 text-slate-600">
                        Education helps individuals understand the world, develop
                        their abilities, and contribute positively to society.
                        Our school seeks to encourage students to learn with
                        curiosity, act with integrity, and work towards their goals.
                    </p>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2">
                        <div className="rounded-2xl bg-blue-50 p-6">
                            <BookOpen className="text-blue-900" size={30} />
                            <h3 className="mt-4 font-bold text-blue-950">
                                The Power of Education
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                Learning builds understanding, skills, and confidence.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-orange-50 p-6">
                            <Heart className="text-orange-600" size={30} />
                            <h3 className="mt-4 font-bold text-blue-950">
                                Values and Character
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                Respect, honesty, and discipline help students grow.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}