import { ReactNode } from 'react';
import "./glossary.css";

interface GlossaryLayoutProps {
    children: ReactNode;
}

export default function GlossaryLayout({ children }: GlossaryLayoutProps) {
    return (
        <div className="mx-auto max-w-3xl py-10 prose dark:prose-invert glossary-table">
            {children}
        </div>
    );
}
