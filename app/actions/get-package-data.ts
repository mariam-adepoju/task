"use server";

import { mapEcosystem } from "@/server/safedep/ecosystem";
import { getPackageInsights } from "@/server/safedep/insights";
import { getPackageMalwareAnalysis } from "@/server/safedep/malysis";

export async function getPackageData(
  ecosystem: string,
  name: string,
  version: string
) {
  // Validate inputs
  if (!ecosystem || !name || !version) {
    throw new Error("Ecosystem, name, and version are all required");
  }
  const ecoEnum = mapEcosystem(ecosystem);
  // Run RPC calls concurrently with try/catch to prevent runtime crash
  const [insights, malware] = await Promise.all([
    getPackageInsights(ecoEnum, name, version).catch((err) => {
      console.warn("Error fetching insights:", err);
      return null;
    }),
    getPackageMalwareAnalysis(ecoEnum, name, version).catch((err) => {
      console.warn("Error fetching malware analysis:", err);
      return null;
    }),
  ]);

  if (!insights && !malware) {
    throw new Error("No data available for this package");
  }
  console.log("Fetched package data:", { insights, malware });
  return {
    insights,
    malware,
  };
}
