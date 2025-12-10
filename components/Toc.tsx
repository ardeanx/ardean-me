export default function Toc({ content }: TocProps) {
    const headings = Array.from(content.matchAll(/^##\s+(.*)$/gm), m => m[1]);

    return (
        <nav className="fixed top-20 right-5 w-60 p-4 bg-white shadow rounded border">
            <h2 className="font-bold mb-2 text-lg">Table of Contents</h2>
            <ul className="list-disc list-inside space-y-1">
                {headings.map((h, idx) => (
                    <li key={idx}>
                        <a href={`#${h.replace(/\s+/g, '-')}`} className="text-blue-600 hover:underline">
                            {h}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
