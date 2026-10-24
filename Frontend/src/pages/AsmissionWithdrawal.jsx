import { UserPlus, UserMinus, FileCheck } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function AdmissionWithdrawal() {
    return (
        <>
            <PageHeader
                title="Admission & Withdrawal Procedure"
                subtitle="Guidance for admission, transfer, and withdrawal requests."
            />

            <section className="mx-auto max-w-6xl px-4 py-16">
                <div className="grid gap-8 md:grid-cols-2">
                    <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
                        <div className="inline-flex rounded-xl bg-green-100 p-4 text-green-700">
                            <UserPlus size={32} />
                        </div>

                        <h2 className="mt-5 text-2xl font-bold text-blue-950">
                            Admission
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600">
                            Parents should contact the school office, complete the
                            prescribed admission form, and submit the required documents.
                        </p>

                        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                            <li>Complete the prescribed application form.</li>
                            <li>Submit the documents requested by the school.</li>
                            <li>Follow the school's admission instructions.</li>
                        </ul>
                    </article>

                    <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
                        <div className="inline-flex rounded-xl bg-orange-100 p-4 text-orange-600">
                            <UserMinus size={32} />
                        </div>

                        <h2 className="mt-5 text-2xl font-bold text-blue-950">
                            Withdrawal / Transfer
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600">
                            Parents should submit a formal withdrawal request to the
                            school office and follow the school's official process.
                        </p>

                        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                            <li>Contact the school office about the process.</li>
                            <li>Complete any required forms.</li>
                            <li>Confirm transfer certificate requirements and timelines.</li>
                        </ul>
                    </article>
                </div>

                <div className="mt-8 flex gap-4 rounded-2xl bg-blue-50 p-6">
                    <FileCheck className="shrink-0 text-blue-900" size={28} />
                    <p className="leading-7 text-slate-700">
                        The official requirements, documents, and timelines should be
                        confirmed with the school before publishing this information.
                    </p>
                </div>
            </section>
        </>
    );
}