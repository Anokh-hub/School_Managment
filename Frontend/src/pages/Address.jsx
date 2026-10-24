import { MapPin, Navigation } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Address() {
    return (
        <>
            <PageHeader
                title="School Address"
                subtitle="Find the location of our school."
            />

            <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-2">
                <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                    <div className="inline-flex rounded-xl bg-orange-100 p-4 text-orange-600">
                        <MapPin size={32} />
                    </div>

                    <h2 className="mt-6 text-2xl font-bold text-blue-950">
                        Visit Our School
                    </h2>

                    <p className="mt-4 leading-8 text-slate-600">
                        The school's complete postal address will be displayed here.
                        Replace this text with the verified address supplied by
                        the school.
                    </p>

                    <div className="mt-6 rounded-xl bg-slate-50 p-4">
                        <p className="font-semibold text-slate-800">Address</p>
                        <p className="mt-2 text-sm text-slate-600">
                            Add the school's real address here.
                        </p>
                    </div>
                </div>

                <div className="flex min-h-80 flex-col items-center justify-center rounded-3xl bg-blue-50 p-8 text-center">
                    <Navigation size={48} className="text-blue-900" />

                    <h2 className="mt-5 text-xl font-bold text-blue-950">
                        School Location Map
                    </h2>

                    <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
                        Once the exact address is confirmed, embed the school's
                        Google Map here.
                    </p>

                    {/* Add the verified Google Maps embed here */}
                </div>
            </section>
        </>
    );
}