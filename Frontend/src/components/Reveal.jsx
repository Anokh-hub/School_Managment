import { useEffect, useRef } from "react";

/* Scroll karte hi children animate hote hain.
   variant: "" (neeche se upar) | "from-left" | "from-right" | "zoom" */
export default function Reveal({ children, delay = 0, variant = "", className = "" }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("is-visible");
                    io.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${variant} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}