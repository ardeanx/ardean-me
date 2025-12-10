import React from 'react';

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-4xl mx-auto py-10 px-5 prose prose-slate">
            {children}
        </div>
    );
}
