import "server-only";
import { Ecosystem } from "@buf/safedep_api.bufbuild_es/safedep/messages/package/v1/ecosystem_pb.js";
import {
  GetPackageVersionInsightResponseSchema,
  InsightService,
} from "@buf/safedep_api.bufbuild_es/safedep/services/insights/v2/insights_pb.js";
import { createClient } from "@connectrpc/connect";
import { getTransport } from "./transport";
import { toJson } from "@bufbuild/protobuf";
import { PackageInsight } from "@/types/safedep";

export async function getPackageInsights(
  ecosystem: Ecosystem,
  name: string,
  version: string
) {
  const client = createClient(InsightService, getTransport());
  try {
    const res = await client.getPackageVersionInsight({
      packageVersion: { package: { ecosystem, name }, version },
    });
    // console.log(toJson(GetPackageVersionInsightResponseSchema, res));
    return toJson(
      GetPackageVersionInsightResponseSchema,
      res
    ) as unknown as PackageInsight;
  } catch (err) {
    console.error("Insights Error:", err);
    throw err;
  }
}
