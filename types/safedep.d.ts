export type ConfidenceLevel =
  | "CONFIDENCE_HIGH"
  | "CONFIDENCE_MEDIUM"
  | "CONFIDENCE_LOW"
  | "CONFIDENCE_UNSPECIFIED";

export interface PackageVersionIdentifier {
  package?: {
    name: string;
    ecosystem: string;
  };
  version: string;
}

export interface LicenseInfo {
  licenseId: string;
  name?: string;
  links?: string[];
}
export interface VulnerabilityIdentifier {
  type: string;
  value: string;
}
export interface VulnerabilitySeverity {
  type: string;
  score: string;
  risk:
    | "RISK_CRITICAL"
    | "RISK_HIGH"
    | "RISK_MEDIUM"
    | "RISK_LOW"
    | "RISK_UNSPECIFIED";
}
export interface Vulnerability {
  id: VulnerabilityIdentifier;
  summary: string;
  aliases?: VulnerabilityIdentifier[];
  related?: { value: string }[];
  severities: VulnerabilitySeverity[];
  publishedAt: string;
  modifiedAt: string;
}
interface VersionItem {
  version: string;
  publishedAt: string;
}
export interface PackageInsight {
  packageVersion?: PackageVersionIdentifier;
  insight?: {
    vulnerabilities?: Vulnerability[];
    licenses?: {
      licenses: LicenseInfo[];
    };
    availableVersions?: VersionItem[];
    projectInsights?: Array<{
      scorecard?: {
        score: number;
      };
    }>;
  };
}

export interface MalwareReport {
  status: string;
  report: {
    analyzedAt: string;
    inference: {
      confidence: ConfidenceLevel;
      details: string;
      summary: string;
    };
    target: {
      origin: string;
      sha256: string;
    };
  };
}
interface ConsolidatedPackageData {
  insights: PackageInsight | null;
  malware: MalwareReport | null;
  metadata: {
    name: string;
    version: string;
    ecosystem: string;
  };
}
