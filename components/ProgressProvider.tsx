"use client";

import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";

export default function ProgressProvider() {
    const path = usePathname();

    useEffect(() => {
        // Mulai progress bar saat route berubah
        NProgress.start();

        // Selesaikan setelah delay kecil agar smooth
        const done = setTimeout(() => {
            NProgress.done();
        }, 300);

        return () => clearTimeout(done);
    }, [path]);

    return null;
}
