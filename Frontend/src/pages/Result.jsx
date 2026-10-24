
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { Trophy, ExternalLink, Medal } from "lucide-react";

const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"];

const toppers = {
    "Class 1": [],
    "Class 2": [],
    "Class 3": [],
    "Class 4": [],
    "Class 5": [],
    "Class 6": [],
    "Class 7": [],
    "Class 8": [],
    "Class 9": [],
    "Class 10": [],
    "Class 11": [],
    "Class 12": [],
};

const boardResults = [
    {
        title: "UP Board Class 10th Result",
        description: "Check the official High School examination result.",
        url: "https://upmsp.edu.in/",
    },
    {
        title: "UP Board Class 12th Result",
        description: "Check the official Intermediate examination result.",
        url: "https://upmsp.edu.in/",
    },
];

export default function Results() {
    const [selectedClass, setSelectedClass] = useState("Class 10");

    return (
        <>
            <PageHeader
                title="Results & Achievements"
                subtitle="Academic performance, student toppers and board examination resources."
            />

            <section className="mx-auto max-w-7xl px-4 py-14">
                <div className="grid gap-6 md:grid-cols-2">
                    {boardResults.map((item) => (
                        <div key={item.title} className="rounded-2xl bg-blue-950 p-7 text-white">
                            <Trophy className="text-orange-400" size={36} />
                            <h2 className="mt-5 text-xl font-bold">{item.title}</h2>
                            <p className="mt-3 leading-7 text-blue-100">{item.description}</p>
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
                            >
                                Visit UPMSP <ExternalLink size={17} />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-12 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                    <h2 className="text-2xl font-bold text-blue-950">Class-wise Top 5 Students</h2>
                    <p className="mt-3 text-gray-600">
                        Select a class to view its top students. Actual names and marks will appear after the school provides its verified Excel data.
                    </p>

                    <select
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        className="mt-6 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 sm:max-w-xs"
                    >
                        {classes.map((item) => (
                            <option key={item}>{item}</option>
                        ))}
                    </select>

                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full min-w-[500px] text-left">
                            <thead className="bg-blue-950 text-white">
                                <tr>
                                    <th className="p-4">Rank</th>
                                    <th className="p-4">Student Name</th>
                                    <th className="p-4">Marks / Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {toppers[selectedClass].length > 0 ? (
                                    toppers[selectedClass].map((student, index) => (
                                        <tr key={student.name} className="border-b border-gray-100">
                                            <td className="p-4">{index + 1}</td>
                                            <td className="p-4 font-medium">{student.name}</td>
                                            <td className="p-4">{student.marks}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="p-8 text-center text-gray-500">
                                            <Medal className="mx-auto mb-3 text-orange-500" size={32} />
                                            Topper data will be updated soon.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}
