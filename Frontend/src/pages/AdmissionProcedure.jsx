import { Link } from "react-router-dom";
import { ClipboardCheck, FileText, CalendarDays, ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";

const steps = [
    {
        number: "01",
        title: "Enquiry",
        description: "Contact the school to enquire about admission and available classes.",
    },
    {
        number: "02",
        title: "Application Form",
        description: "Obtain and complete the admission form with accurate information.",
    },
    {
        number: "03",
        title: "Documents",
        description: "Submit the documents required by the school.",
    },
    {
        number: "04",
        title: "Confirmation",
        description: "Follow the school's instructions to complete the admission process.",
    },
];

export default function AdmissionProcedure() {
    return (
        <>
            <PageHeader
                title="Admission Procedure"
                subtitle="Information for parents seeking admission for their children."
            />

            <section className="mx-auto max-w-6xl px-4 py-16">
                <div className="rounded-3xl bg-blue-950 p-8 text-white sm:p-10">
                    <ClipboardCheck size={42} className="text-orange-400" />
                    <h2 className="mt-5 text-2xl font-bold">How to Apply</h2>
                    <p className="mt-3 max-w-2xl leading-7 text-blue-100">
                        Parents should contact the school office for current admission
                        dates, class availability, eligibility, and required documents.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    {steps.map((step) => (
                        <article
                            key={step.number}
                            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                        >
                            <span className="text-3xl font-extrabold text-orange-500">
                                {step.number}
                            </span>
                            <h3 className="mt-3 text-xl font-bold text-blue-950">
                                {step.title}
                            </h3>
                            <p className="mt-3 leading-7 text-slate-600">
                                {step.description}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="mt-10 rounded-2xl bg-orange-50 p-6">
                    <h3 className="font-bold text-blue-950">Important Information</h3>
                    <p className="mt-2 leading-7 text-slate-600">
                        These steps are general guidance. Add the school's confirmed
                        admission rules, documents, and dates before publishing.
                    </p>
                    <Link
                        to="/fees-structure"
                        className="mt-5 inline-flex items-center gap-2 font-bold text-orange-700 hover:text-orange-800"
                    >
                        View Fees Structure <ArrowRight size={17} />
                    </Link>
                </div>
            </section>
        </>
    );
}