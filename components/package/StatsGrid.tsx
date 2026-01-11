import { ShieldAlert, Activity, FileText, Layers, Box } from "lucide-react";
import { StatCard } from "./StatsCard";
import { ConsolidatedPackageData } from "@/types/safedep";
import { formatEcosystem } from "@/lib/utils";

export function StatsGrid({ data }: { data: ConsolidatedPackageData }) {
    const { insights } = data;
    const vulnCount = insights?.insight?.vulnerabilities?.length ?? 0;
    const score = insights?.insight?.projectInsights?.[0]?.scorecard?.score;
    const displayScore = (typeof score === 'number')
        ? `${score.toFixed(1)}/10`
        : "N/A";
    const license = insights?.insight?.licenses?.licenses?.[0].licenseId ?? "Unknown";
    const rawEcosystem = insights?.packageVersion?.package?.ecosystem ?? "Unknown";
    const displayEcosystem = formatEcosystem(rawEcosystem);

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 bg-zinc-900/50 p-4 border-x border-zinc-800">
            <StatCard title="Version" value={insights?.packageVersion?.version} icon={Box} />
            <StatCard
                title="Vulnerabilities"
                value={vulnCount}
                icon={ShieldAlert}
                valueColor={vulnCount > 0 ? "text-red-500" : "text-green-500"}
            />
            <StatCard
                title="OpenSSF Scorecard"
                value={displayScore}
                icon={Activity}
                valueColor="text-emerald-500"
            />
            <StatCard title="License" value={license} icon={FileText} />
            <StatCard title="Ecosystem" value={displayEcosystem} icon={Layers} />
        </div>
    );
}