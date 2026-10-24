import { Heart, BookOpen } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function SchoolPrayer() {
    return (
        <>
            <PageHeader
                title="School Prayer"
                subtitle="The school prayer followed by students."
            />

            <section className="mx-auto max-w-4xl px-4 py-16">
                <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl sm:p-12">
                    <Heart size={44} className="mx-auto text-orange-400" />

                    <h2 className="mt-6 text-3xl font-extrabold">
                        Our School Prayer
                    </h2>

                    <p className="mt-4 leading-8 text-blue-100">
                        This page is dedicated to the school's prayer and its
                        message of gratitude, kindness, and positive values.
                    </p>

                    <div className="mt-8 rounded-2xl bg-white p-6 text-left text-slate-700 sm:p-8">
                        <BookOpen size={27} className="text-orange-500" />

                        <h3 className="mt-4 text-xl font-bold text-blue-950">
                            Prayer Text
                        </h3>

                        <p className="mt-3 whitespace-pre-line leading-8">
                            Add the school's actual prayer here.
                            {"\n\n"}
                            The final content should be confirmed by the school.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}