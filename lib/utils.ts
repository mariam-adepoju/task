import { ConfidenceLevel } from "@/types/safedep";
import {
  AlertOctagon,
  AlertTriangle,
  AlertCircle,
  ShieldCheck,
  Info,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getRiskConfig(risk: string = "") {
  const normalized = risk.toLowerCase();

  if (normalized.includes("critical")) {
    return { styles: "bg-red-50 text-red-700", icon: AlertOctagon };
  }
  if (normalized.includes("high")) {
    return { styles: "bg-pink-100 text-pink-700", icon: AlertTriangle };
  }
  if (normalized.includes("medium")) {
    return { styles: "bg-yellow-100 text-yellow-700", icon: AlertCircle };
  }
  if (normalized.includes("low")) {
    return { styles: "bg-cyan-50 text-cyan-700", icon: Info };
  }
  return { styles: "bg-neutral-100 text-neutral-600", icon: ShieldCheck };
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
