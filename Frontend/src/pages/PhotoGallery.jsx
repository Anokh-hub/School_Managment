
import PageHeader from "../components/PageHeader";
import { Image as ImageIcon } from "lucide-react";

const gallery = [
    { title: "School Campus", category: "Campus", color: "bg-blue-100" },
    { title: "Classroom Activities", category: "Academics", color: "bg-orange-100" },
    { title: "Annual Function", category: "Events", color: "bg-purple-100" },
    { title: "Sports Activities", category: "Sports", color: "bg-green-100" },
    { title: "Cultural Programme", category: "Events", color: "bg-pink-100" },
    { title: "School Celebration", category: "Celebrations", color: "bg-yellow-100" },
];

export default function PhotoGallery() {
    return (
        <>
            <PageHeader
                title="Photo Gallery"
                subtitle="Explore memorable moments from school life and activities."
            />

            <section className="mx-auto max-w-7xl px-4 py-14">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-blue-950">School Memories</h2>
                    <p className="mt-3 text-gray-600">
                        Actual school photographs can be added to these gallery cards.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {gallery.map((item) => (
                        <div
                            key={item.title}
                            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
                        >
                            <div className={`flex h-56 items-center justify-center ${item.color} transition group-hover:brightness-95`}>
                                <ImageIcon size={58} className="text-blue-950/50" />
                            </div>
                            <div className="p-5">
                                <span className="text-sm font-semibold text-orange-500">{item.category}</span>
                                <h3 className="mt-2 text-lg font-bold text-blue-950">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-center text-sm text-gray-500">
                    These are placeholders, not actual photographs of the school.
                </p>
            </section>
        </>
    );
}
