import "server-only";
import { Ecosystem } from "@buf/safedep_api.bufbuild_es/safedep/messages/package/v1/ecosystem_pb.js";
import {
  MalwareAnalysisService,
  QueryPackageAnalysisResponseSchema,
} from "@buf/safedep_api.bufbuild_es/safedep/services/malysis/v1/malysis_pb.js";
import { createClient, ConnectError, Code } from "@connectrpc/connect";
import { getTransport } from "./transport";
import { toJson } from "@bufbuild/protobuf";
import { MalwareReport } from "@/types/safedep";

export async function getPackageMalwareAnalysis(
  ecosystem: Ecosystem,
  name: string,
  version: string
) {
  const client = createClient(MalwareAnalysisService, getTransport());
  try {
    const res = await client.queryPackageAnalysis({
      target: {
        packageVersion: {
          package: { ecosystem, name },
          version,
        },
      },
    });
    // console.log(toJson(QueryPackageAnalysisResponseSchema, res));
    return toJson(
      QueryPackageAnalysisResponseSchema,
      res
    ) as unknown as MalwareReport;
  } catch (err) {
    if (err instanceof ConnectError && err.code === Code.NotFound) {
      console.warn(`[Malware Analysis] No data for ${name}@${version}`);
      return null;
    }
    console.error("Malware Analysis Technical Error:", err);
    throw err;
  }
}
