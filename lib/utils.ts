import { ConfidenceLevel } from "@/types/safedep";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getRiskStyles(risk: string = "") {
  const normalized = risk.toLowerCase();

  if (normalized.includes("critical")) {
    return "bg-red-100 text-red-700 border-red-200 hover:bg-red-100";
  }
  if (normalized.includes("high")) {
    return "bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-100";
  }
  if (normalized.includes("medium")) {
    return "bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-100";
  }
  if (normalized.includes("low")) {
    return "bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-100";
  }

  return "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-100";
}
export function formatRiskLabel(risk: string = "") {
  return risk.replace("RISK_", "").toLowerCase() || "unspecified";
}
export function formatEcosystem(eco: string = "") {
  return eco.replace("ECOSYSTEM_", "").toLowerCase();
}
export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
export function formatFullDate(dateString: string | undefined) {
  if (!dateString) return "Pending...";

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Ensures 24-hour format
  })
    .format(date)
    .replace(",", ""); // Standard Intl adds a comma we might want to control
}
export const formatConfidence = (conf?: ConfidenceLevel) => {
  if (!conf) return "N/A";
  return conf.replace("CONFIDENCE_", "").toLowerCase();
};
