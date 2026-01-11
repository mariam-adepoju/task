import { ConsolidatedPackageData } from "@/types/safedep"; // Import your new type
import { formatFullDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface PackageHeroProps {
    data: ConsolidatedPackageData;
}

export function PackageHero({ data }: PackageHeroProps) {
    const { name, version } = data.metadata;
    const report = data.malware?.report;
    const analyzedAt = report?.analyzedAt;
    const source = report?.target?.origin ?? "Not Available";
    const sha256 = report?.target?.sha256 ?? "Not Available";

    return (
        <section className="space-y-2">
            <div className="flex items-center gap-2">
                <Image src="/github-mark.svg" alt="GitHub Logo" width={32} height={32} className="p-1 border border-slate-5 bg-slate-1 rounded-[3px]" />
                <h2 className="text-xl font-medium text-neutral-12">
                    {name}<span>@</span>{version}
                </h2>
            </div>
            <div className="space-y-2 text-sm">
                <div className="flex gap-1 items-center">
                    <span className="text-slate-500 text-xs">Analyzed at</span>
                    <span className="text-foreground text-xs tracking-[0.04px]">{formatFullDate(analyzedAt)}</span>
                </div>
                <div className="flex gap-1 items-center">
                    <span className="text-slate-500 text-xs">Source</span>
                    {source !== "Not Available" ? (
                        <Link href={source} target="_blank" rel="noreferrer" className="text-foreground text-xs tracking-[0.04px]">
                            {source}
                        </Link>
                    ) : (
                        <span className="text-foreground text-xs tracking-[0.04px]">Not Available</span>
                    )}
                </div>
                <div className="flex gap-1 items-center">
                    <span className="text-slate-500 text-xs">SHA256</span>
                    {sha256 !== "Not Available" ? (
                        <span className="text-foreground text-xs tracking-[0.04px]">
                            {sha256}
                        </span>
                    ) : (
                        <span className="text-foreground text-xs tracking-[0.04px]">Not Available</span>
                    )}
                </div>
                <div className="flex gap-1 items-center">
                    <span className="text-slate-500 text-xs">Confidence</span>
                    {sha256 !== "Not Available" ? (
                        <span className="text-foreground text-xs tracking-[0.04px]">
                            {sha256}
                        </span>
                    ) : (
                        <span className="text-foreground text-xs tracking-[0.04px]">Not Available</span>
                    )}
                </div>
            </div>
        </section>
    );
}