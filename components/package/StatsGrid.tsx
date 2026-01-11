import { Info, Bug, FileBadge2, Award, Earth, } from "lucide-react";
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            <StatCard title="Version" value={insights?.packageVersion?.version} icon={Info} />
            <StatCard
                title="Vulnerabilities"
                value={vulnCount}
                icon={Bug}
                iconColor="text-red-700"
            />
            <StatCard
                title="OpenSSF Scorecard"
                value={displayScore}
                icon={FileBadge2}
                valueColor="text-primary"
            />
            <StatCard title="License" value={license} icon={Award} />
            <StatCard title="Ecosystem" value={displayEcosystem} icon={Earth} />
        </div>
    );
}