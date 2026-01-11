import { getPackageData } from "@/app/actions/get-package-data";
import { AnalysisTabs } from "@/components/package/AnalysisTabs";
import { PackageHero } from "@/components/package/PackageHero";
import { StatsGrid } from "@/components/package/StatsGrid";
import { ConsolidatedPackageData } from "@/types/safedep";


export default async function PackagePage({ params }: { params: Promise<any> }) {
    const { ecosystem, name, version } = await params;
    const { insights, malware } = await getPackageData(ecosystem, name, version);
    const packageData: ConsolidatedPackageData = {
        insights,
        malware,
        metadata: { name, version, ecosystem }
    };
    return (
        <div className="flex flex-col">
            <PackageHero data={packageData} />
            <StatsGrid data={packageData} />
            <div className="bg-background border rounded-b-xl shadow-sm">
                <AnalysisTabs data={packageData} />
            </div>
        </div>
    );
}