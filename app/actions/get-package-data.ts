"use server";
import { mapEcosystem } from "@/server/safedep/ecosystem";
import { getPackageInsights } from "@/server/safedep/insights";
import { getPackageMalwareAnalysis } from "@/server/safedep/malysis";

export async function getPackageData(
  ecosystem: string,
  name: string,
  version: string
) {
  if (!ecosystem || !name || !version) {
    throw new Error("Ecosystem, name, and version are all required");
  }
  const ecoEnum = mapEcosystem(ecosystem);
  const [insightsResult, malwareResult] = await Promise.allSettled([
    getPackageInsights(ecoEnum, name, version),
    getPackageMalwareAnalysis(ecoEnum, name, version),
  ]);

  const isInsightsRejected = insightsResult.status === "rejected";
  const isMalwareRejected = malwareResult.status === "rejected";

  const insights =
    insightsResult.status === "fulfilled" ? insightsResult.value : null;
  const malware =
    malwareResult.status === "fulfilled" ? malwareResult.value : null;

  if (insights?.insight?.availableVersions) {
    insights.insight.availableVersions = insights.insight.availableVersions
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
      .slice(0, 100);
  }

  if (!insights && !malware) {
    if (isInsightsRejected && isMalwareRejected) {
      throw new Error(
        "NETWORK_ERROR: Services unreachable. Check your API key or connection."
      );
    }
  }
  // console.log(insights, malware);
  return {
    insights,
    malware,
    metadata: { ecosystem, name, version },
  };
}
