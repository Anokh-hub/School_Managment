import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Image as ImageIcon } from "lucide-react";
import Reveal from "./Reveal";

/* ============ MANUAL DATA (abhi ke liye) ============
   Baad me DB se aayega: bas <SchoolShowcase items={dataFromApi} /> pass kar dena.
   Har item ka format:
   { id, type: "image" | "video", src, title, caption }
   - photos ko public/images/ me rakho aur src="/images/naam.jpg" likho
   - videos ko public/video/ me rakho aur src="/video/naam.mp4" likho          */
const defaultItems = [
    { id: 1, type: "video", src: "/video/first.mp4", title: "Life at Our Campus", caption: "A glimpse of everyday learning and activity." },
    { id: 2, type: "image", src: "/images/mainPage.jpeg", title: "Our School Campus", caption: "Where learning, creativity and excellence come together." },
    { id: 3, type: "video", src: "/video/journey.mp4", title: "Our Learning Journey", caption: "Moments from school events and functions." },
    { id: 4, type: "video", src: "/video/computer.mp4", title: "Computer Lab", caption: "Technology-based learning for every student." },
    { id: 5, type: "video", src: "/video/achievement.mp4", title: "Celebrating Achievements", caption: "Recognising the efforts of our students." },
];

export default function SchoolShowcase({ items = defaultItems, imageDuration = 5000 }) {
    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(0); // 0 → 1
    const [paused, setPaused] = useState(false);

    const total = items.length;
    const current = items[index];

    const go = useCallback(
        (i) => {
            setIndex(((i % total) + total) % total);
            setProgress(0);
        },
        [total]
    );

    // photo: kuch seconds baad agli item par
    useEffect(() => {
        if (!current || current.type !== "image" || paused || total < 2) return;
        const t = setInterval(() => {
            setProgress((p) => Math.min(p + 50 / imageDuration, 1));
        }, 50);
        return () => clearInterval(t);
    }, [index, paused, current, total, imageDuration]);

    useEffect(() => {
        if (progress >= 1 && current?.type === "image" && total > 1) go(index + 1);
    }, [progress, current, total, index, go]);

    if (!total) return null;

    return (
        <section className="font-body mx-auto max-w-7xl px-4 pt-20">
            <div className="mx-auto mb-10 max-w-2xl text-center">
                <Reveal>
                    <span className="font-bold tracking-wide text-amber-600">School Life</span>
                </Reveal>
                <Reveal delay={120}>
                    <h2 className="font-display mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        Moments From Our School
                    </h2>
                </Reveal>
                <Reveal delay={240}>
                    <p className="mt-4 leading-7 text-slate-600">
                        Functions, activities and everyday life at our school.
                    </p>
                </Reveal>
            </div>

            <Reveal variant="zoom">
                <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
                    {/* ============ Main stage ============ */}
                    <div
                        className="group relative aspect-video overflow-hidden rounded-3xl border border-white/15 bg-[#071326] shadow-2xl shadow-slate-900/20"
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                    >
                        {items.map((it, i) => {
                            const active = i === index;
                            return (
                                <div
                                    key={it.id}
                                    className={`absolute inset-0 transition-opacity duration-700 ${active ? "z-10 opacity-100" : "z-0 opacity-0"}`}
                                >
                                    {it.type === "image" ? (
                                        <img
                                            src={it.src}
                                            alt={it.title}
                                            loading={i === 0 ? "eager" : "lazy"}
                                            className={`h-full w-full object-cover ${active ? "animate-ken" : ""}`}
                                        />
                                    ) : (
                                        active && (
                                            <video
                                                key={`${it.id}-${index}`}
                                                src={it.src}
                                                autoPlay
                                                muted
                                                playsInline
                                                loop={total === 1}
                                                className="h-full w-full object-cover"
                                                onTimeUpdate={(e) => {
                                                    const d = e.currentTarget.duration;
                                                    if (d) setProgress(e.currentTarget.currentTime / d);
                                                }}
                                                onEnded={() => go(index + 1)}
                                                onError={() => total > 1 && go(index + 1)}
                                            />
                                        )
                                    )}
                                </div>
                            );
                        })}

                        {/* gradient + caption */}
                        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#071326]/90 via-[#071326]/20 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 z-30 p-5 pb-9 sm:p-8 sm:pb-12">
                            <div key={index} className="hero-in" style={{ animationDelay: "0.1s" }}>
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/15 px-3 py-1 text-xs font-semibold text-amber-300">
                                    {current.type === "video" ? <Play size={12} /> : <ImageIcon size={12} />}
                                    {current.type === "video" ? "Video" : "Photo"}
                                </span>
                                <h3 className="font-display mt-3 text-xl font-bold text-white sm:text-3xl">{current.title}</h3>
                                {current.caption && (
                                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-200 sm:text-base">{current.caption}</p>
                                )}
                            </div>
                        </div>

                        {/* counter */}
                        <span className="absolute right-4 top-4 z-30 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                        </span>

                        {/* arrows */}
                        {total > 1 && (
                            <>
                                <button
                                    type="button"
                                    aria-label="Previous"
                                    onClick={() => go(index - 1)}
                                    className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white opacity-0 backdrop-blur-sm transition hover:bg-amber-400 hover:text-slate-900 group-hover:opacity-100 max-sm:opacity-100"
                                >
                                    <ChevronLeft size={22} />
                                </button>
                                <button
                                    type="button"
                                    aria-label="Next"
                                    onClick={() => go(index + 1)}
                                    className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white opacity-0 backdrop-blur-sm transition hover:bg-amber-400 hover:text-slate-900 group-hover:opacity-100 max-sm:opacity-100"
                                >
                                    <ChevronRight size={22} />
                                </button>
                            </>
                        )}

                        {/* segmented progress */}
                        <div className="absolute inset-x-5 bottom-4 z-30 flex gap-1.5 sm:inset-x-8">
                            {items.map((it, i) => (
                                <button
                                    key={it.id}
                                    type="button"
                                    aria-label={`Go to ${it.title}`}
                                    onClick={() => go(i)}
                                    className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/25"
                                >
                                    <span
                                        className="block h-full rounded-full bg-amber-400"
                                        style={{ width: i < index ? "100%" : i === index ? `${progress * 100}%` : "0%" }}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* ============ Playlist ============ */}
                    <div className="flex gap-3 overflow-x-auto pb-2 lg:max-h-[420px] lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden lg:pb-0 lg:pr-1">
                        {items.map((it, i) => {
                            const active = i === index;
                            return (
                                <button
                                    key={it.id}
                                    type="button"
                                    onClick={() => go(i)}
                                    className={`group/item relative flex w-56 shrink-0 items-center gap-3 overflow-hidden rounded-xl border p-3 text-left transition lg:w-auto ${active
                                        ? "border-amber-400 bg-amber-50 shadow-md"
                                        : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
                                        }`}
                                >
                                    <span
                                        className={`shrink-0 rounded-lg p-2.5 transition-colors ${active ? "bg-[#071326] text-amber-300" : "bg-slate-100 text-slate-500 group-hover/item:bg-amber-100 group-hover/item:text-amber-600"
                                            }`}
                                    >
                                        {it.type === "video" ? <Play size={18} /> : <ImageIcon size={18} />}
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block truncate text-sm font-bold text-slate-900">{it.title}</span>
                                        <span className="block text-xs text-slate-500">{it.type === "video" ? "Video" : "Photo"}</span>
                                    </span>
                                    {active && (
                                        <span
                                            className="absolute bottom-0 left-0 h-0.5 bg-amber-400"
                                            style={{ width: `${progress * 100}%` }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </Reveal>
        </section>
    );
}