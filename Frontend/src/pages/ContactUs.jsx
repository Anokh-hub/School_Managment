
import PageHeader from "../components/PageHeader";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

const school = {
    phone: "+91-XXXXXXXXXX",
    email: "school@example.com",
    address: "Enter the school's complete address here",
    mapUrl: "https://www.google.com/maps",
};

export default function ContactUs() {
    return (
        <>
            <PageHeader
                title="Contact Us"
                subtitle="Get in touch with our school for information and assistance."
            />

            <section className="mx-auto max-w-7xl px-4 py-14">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold text-blue-950">We Are Here to Help</h2>
                        <p className="mt-4 leading-8 text-gray-600">
                            Contact the school office for admission enquiries, academic
                            information and other school-related questions.
                        </p>

                        <div className="mt-8 space-y-5">
                            <a
                                href={`tel:${school.phone}`}
                                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                            >
                                <Phone className="mt-1 text-orange-500" size={24} />
                                <div>
                                    <h3 className="font-bold text-blue-950">Phone</h3>
                                    <p className="mt-1 text-gray-600">{school.phone}</p>
                                </div>
                            </a>

                            <a
                                href={`mailto:${school.email}`}
                                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                            >
                                <Mail className="mt-1 text-orange-500" size={24} />
                                <div>
                                    <h3 className="font-bold text-blue-950">Email</h3>
                                    <p className="mt-1 text-gray-600">{school.email}</p>
                                </div>
                            </a>

                            <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                <MapPin className="mt-1 text-orange-500" size={24} />
                                <div>
                                    <h3 className="font-bold text-blue-950">School Address</h3>
                                    <p className="mt-1 leading-7 text-gray-600">{school.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                <Clock className="mt-1 text-orange-500" size={24} />
                                <div>
                                    <h3 className="font-bold text-blue-950">Office Hours</h3>
                                    <p className="mt-1 text-gray-600">Please confirm timings with the school.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                        <iframe
                            title="School location on Google Maps"
                            src="https://maps.google.com/maps?q=Uttar%20Pradesh%20India&t=&z=10&ie=UTF8&iwloc=&output=embed"
                            className="h-[420px] w-full"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="p-5">
                            <a
                                href={school.mapUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 font-semibold text-blue-900 hover:text-orange-500"
                            >
                                Open Google Maps <ExternalLink size={17} />
                            </a>
                            <p className="mt-2 text-sm text-gray-500">
                                Replace the sample location with the school's exact map location.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
