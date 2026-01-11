import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SummaryTab } from "./tabs/SummaryTab";
import { VulnerabilityTable } from "./tabs/VulnerabilityTable";
import { LicenseTable } from "./tabs/LicenseTable";
import { ConsolidatedPackageData } from "@/types/safedep";
import { VersionsTable } from "./tabs/VersionTable";

interface AnalysisTabsProps {
    data: ConsolidatedPackageData;
}

export function AnalysisTabs({ data }: AnalysisTabsProps) {
    const insights = data.insights;
    const malware = data.malware;
    const pkgVersion = insights?.packageVersion;
    const insightDetails = insights?.insight;

    return (
        <Tabs defaultValue="overview" className="w-full">
            <div className="border-b px-4 bg-slate-50/50">
                <TabsList className="bg-transparent h-12 gap-6">
                    <TabsTrigger
                        value="overview"
                        className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full px-0"
                    >
                        Overview
                    </TabsTrigger>
                    <TabsTrigger
                        value="vulnerabilities"
                        className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full px-0"
                    >
                        Vulnerabilities
                    </TabsTrigger>
                    <TabsTrigger
                        value="versions"
                        className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full px-0"
                    >
                        Versions
                    </TabsTrigger>
                    <TabsTrigger
                        value="license"
                        className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full px-0"
                    >
                        License
                    </TabsTrigger>
                </TabsList>
            </div>

            <div className="p-6">
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