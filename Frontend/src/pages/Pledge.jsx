import { ShieldCheck } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Pledge() {
    return (
        <>
            <PageHeader
                title="Pledge"
                subtitle="The pledge observed by our school community."
            />

            <section className="mx-auto max-w-4xl px-4 py-16">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-700">
                        <ShieldCheck size={40} />
                    </div>

                    <h2 className="mt-6 text-3xl font-extrabold text-blue-950">
                        Our Pledge
                    </h2>

                    <p className="mt-5 leading-8 text-slate-600">
                        A pledge reminds students of their responsibilities,
                        respect for others, honesty, and commitment to positive
                        values.
                    </p>

                    <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-left sm:p-8">
                        <h3 className="font-bold text-blue-950">Pledge Text</h3>

                        <p className="mt-3 whitespace-pre-line leading-8 text-slate-700">
                            Add the exact pledge text approved by the school here.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}