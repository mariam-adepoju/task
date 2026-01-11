import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SummaryTab } from "./tabs/SummaryTab";
import { VulnerabilityTable } from "./tabs/VulnerabilityTable";
import { LicenseTable } from "./tabs/LicenseTable";
import { ConsolidatedPackageData } from "@/types/safedep";
import { VersionsTable } from "./tabs/VersionTable";
import { cn } from "@/lib/utils";

interface AnalysisTabsProps {
    data: ConsolidatedPackageData;
}

export function AnalysisTabs({ data }: AnalysisTabsProps) {
    const insights = data.insights;
    const malware = data.malware;
    const pkgVersion = insights?.packageVersion;
    const insightDetails = insights?.insight;

    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "vulnerabilities", label: "Vulnerabilities" },
        { id: "versions", label: "Versions" },
        { id: "license", label: "License" },
    ];

    const triggerStyles = cn(
        "data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-xs",
        "rounded-none h-full px-3 py-1.5 text-muted-foreground text-sm rounded-lg font-medium transition-all"
    );

    return (
        <Tabs defaultValue="overview" className="w-full">
            <div className="border px-4 py-2 bg-background">
                <TabsList className="bg-transparent h-14 gap-6">
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.id}
                            value={tab.id}
                            className={triggerStyles}
                        >
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </div>

            <div className="w-full">
                <TabsContent value="overview">
                    <SummaryTab malware={malware!} />
                </TabsContent>
                <TabsContent value="vulnerabilities">
                    <VulnerabilityTable
                        vulnerabilities={insightDetails?.vulnerabilities || []}
                    />
                </TabsContent>
                <TabsContent value="versions">
                    <VersionsTable
                        versions={insightDetails?.availableVersions || []}
                        currentVersion={pkgVersion?.version || data.metadata.version}
                        packageName={pkgVersion?.package?.name || data.metadata.name}
                        ecosystem={data.metadata.ecosystem.toLowerCase()}
                    />
                </TabsContent>

                <TabsContent value="license">
                    <LicenseTable
                        licenses={insightDetails?.licenses || null}
                    />
                </TabsContent>
            </div>
        </Tabs>
    );
}