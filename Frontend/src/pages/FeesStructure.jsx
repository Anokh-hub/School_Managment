import { IndianRupee, Info, Phone } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function FeesStructure() {
    return (
        <>
            <PageHeader
                title="Fees Structure"
                subtitle="Information about school fees and payment guidance."
            />

            <section className="mx-auto max-w-5xl px-4 py-16">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                    <div className="flex items-center gap-4">
                        <div className="rounded-xl bg-orange-100 p-4 text-orange-600">
                            <IndianRupee size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-blue-950">
                                School Fee Details
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Official fee information
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 overflow-x-auto">
                        <table className="w-full min-w-[420px] border-collapse text-left">
                            <thead>
                                <tr className="bg-blue-950 text-white">
                                    <th className="p-4">Class / Category</th>
                                    <th className="p-4">Fee Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {["Nursery / Primary", "Middle School", "Secondary", "Senior Secondary"].map(
                                    (item) => (
                                        <tr key={item} className="border-b border-slate-200">
                                            <td className="p-4 font-medium text-slate-700">{item}</td>
                                            <td className="p-4 text-slate-500">
                                                To be confirmed by school
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 flex items-start gap-3 rounded-xl bg-orange-50 p-5">
                        <Info className="mt-1 shrink-0 text-orange-600" size={22} />
                        <p className="text-sm leading-7 text-slate-700">
                            The fee amounts, due dates, and payment methods must be verified
                            with the school before this page is published.
                        </p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3 text-slate-600">
                        <Phone size={19} />
                        <span>For fee enquiries, contact the school office.</span>
                    </div>
                </div>
            </section>
        </>
    );
}