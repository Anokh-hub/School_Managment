import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function PageHeader({ title, subtitle }) {
    return (
        <section className="bg-blue-950 px-4 py-14 text-white sm:py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-5 flex items-center gap-2 text-sm text-blue-200">
                    <Link to="/" className="flex items-center gap-1 hover:text-orange-400">
                        <Home size={15} />
                        Home
                    </Link>

                    <ChevronRight size={15} />

                    <span className="text-orange-400">{title}</span>
                </div>

                <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                    {title}
                </h1>

                {subtitle && (
                    <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                        {subtitle}
                    </p>
                )}

                <div className="mt-6 h-1 w-20 rounded-full bg-orange-500" />
            </div>
        </section>
    );
}