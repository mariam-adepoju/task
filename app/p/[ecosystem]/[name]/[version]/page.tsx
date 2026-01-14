"use cache";
import { getPackageData } from "@/app/actions/get-package-data";
import { AnalysisTabs } from "@/components/package/AnalysisTabs";
import { PackageHero } from "@/components/package/PackageHero";
import { StatsGrid } from "@/components/package/StatsGrid";
import { ConsolidatedPackageData } from "@/types/safedep";
import { cacheLife } from "next/cache";


export default async function PackagePage({
    params
}: {
    params: Promise<{ ecosystem: string; name: string; version: string }>
}) {
    cacheLife({
        stale: 3600,
        revalidate: 7200,
        expire: 86400,
    })
    const resolvedParams = await params;
    const { ecosystem, name, version } = resolvedParams;
    const { insights, malware } = await getPackageData(ecosystem, name, version);

    const packageData: ConsolidatedPackageData = {
        insights,
        malware,
        metadata: { ecosystem, name, version },
    };
    return (
        <div className="w-full flex flex-col">
            <div className="bg-slate-50 px-6 py-4 border-b space-y-6">
                <PackageHero data={packageData} />
                <StatsGrid data={packageData} />
            </div>
            <div className="w-full">
                <AnalysisTabs data={packageData} />
            </div>
        </div>
    );

}