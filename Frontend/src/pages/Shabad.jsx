import { Music2, BookOpen } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Shabad() {
    return (
        <>
            <PageHeader
                title="Shabad"
                subtitle="A dedicated page for the school's Shabad."
            />

            <section className="mx-auto max-w-4xl px-4 py-16">
                <div className="rounded-3xl border border-orange-100 bg-white p-8 text-center shadow-sm sm:p-12">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        <Music2 size={38} />
                    </div>

                    <h2 className="mt-6 text-2xl font-extrabold text-blue-950">
                        School Shabad
                    </h2>

                    <p className="mt-4 leading-8 text-slate-600">
                        The school's approved Shabad lyrics or text can be displayed
                        in this section.
                    </p>

                    <div className="mt-8 rounded-2xl bg-orange-50 p-6 text-left">
                        <BookOpen size={25} className="text-orange-600" />

                        <p className="mt-4 whitespace-pre-line leading-8 text-slate-700">
                            Add the correct Shabad text here.
                            {"\n\n"}
                            Use the exact text provided or approved by the school.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}