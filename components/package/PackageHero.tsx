"use client";

import { Github, Globe, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ConsolidatedPackageData } from "@/types/safedep"; // Import your new type
import { formatFullDate } from "@/lib/utils";

interface PackageHeroProps {
    data: ConsolidatedPackageData;
}

export function PackageHero({ data }: PackageHeroProps) {
    const [copied, setCopied] = useState(false);

    const { name, version } = data.metadata;
    const report = data.malware?.report;
    const analyzedAt = report?.analyzedAt;
    const source = report?.target?.origin ?? "N/A";
    const sha256 = report?.target?.sha256 ?? "Not Available";

    const copyToClipboard = (text: string) => {
        if (text === "Not Available") return;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="bg-zinc-900 text-zinc-100 rounded-t-xl p-6 border-x border-t border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
                <Github className="h-6 w-6" />
                <h1 className="text-2xl font-bold tracking-tight">
                    {name}<span className="text-zinc-500">@</span>{version}
                </h1>
            </div>

            <div className="space-y-2 text-sm">
                <div className="flex gap-2">
                    <span className="text-zinc-500 font-medium w-20">Analyzed at</span>
                    <span>{formatFullDate(analyzedAt)}</span>
                </div>

                <div className="flex gap-2 items-center">
                    <span className="text-zinc-500 font-medium w-20">Source</span>
                    {source !== "N/A" ? (
                        <a href={source} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline flex items-center gap-1">
                            {source} <Globe className="h-3 w-3" />
                        </a>
                    ) : (
                        <span className="text-zinc-400">Not Available</span>
                    )}
                </div>

                <div className="flex gap-2 items-center">
                    <span className="text-zinc-500 font-medium w-20">SHA256</span>
                    <code className="bg-zinc-800 px-2 py-0.5 rounded text-xs text-zinc-300 truncate max-w-md">
                        {sha256}
                    </code>
                    {sha256 !== "Not Available" && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-zinc-500 hover:text-white"
                            onClick={() => copyToClipboard(sha256)}
                        >
                            {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
}