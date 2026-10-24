
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { FileText, Download } from "lucide-react";

const classes = [
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
];

export default function Syllabus() {
    const [selectedClass, setSelectedClass] = useState("Class 10");

    return (
        <>
            <PageHeader
                title="Syllabus"
                subtitle="Find class-wise syllabus and academic resources."
            />

            <section className="mx-auto max-w-5xl px-4 py-14">
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-9">
                    <h2 className="text-2xl font-bold text-blue-950">
                        Class-wise Syllabus
                    </h2>
                    <p className="mt-3 leading-7 text-gray-600">
                        Select a class to view its syllabus. Official PDF files can be
                        attached when the school provides them.
                    </p>

                    <label
                        htmlFor="class"
                        className="mt-7 block text-sm font-semibold text-gray-700"
                    >
                        Select Class
                    </label>

                    <select
                        id="class"
                        value={selectedClass}
                        onChange={(event) => setSelectedClass(event.target.value)}
                        className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-800 sm:max-w-sm"
                    >
                        {classes.map((className) => (
                            <option key={className} value={className}>
                                {className}
                            </option>
                        ))}
                    </select>

                    <div className="mt-8 flex flex-col gap-4 rounded-xl border border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                            <div className="rounded-xl bg-orange-50 p-3">
                                <FileText className="text-orange-500" size={28} />
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-950">
                                    {selectedClass} Syllabus
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Official document not added yet
                                </p>
                            </div>
                        </div>

                        <span className="inline-flex items-center gap-2 self-start rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-500 sm:self-auto">
                            <Download size={16} />
                            Coming Soon
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
}
