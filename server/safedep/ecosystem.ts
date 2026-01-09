import { Ecosystem } from "@buf/safedep_api.bufbuild_es/safedep/messages/package/v1/ecosystem_pb.js";

export function mapEcosystem(value: string): Ecosystem {
  const normalizedValue = value?.toLowerCase();

  switch (normalizedValue) {
    case "npm":
      return Ecosystem.NPM;
    case "go":
      return Ecosystem.GO;
    case "pypi":
      return Ecosystem.PYPI;
    default:
      return Ecosystem.UNSPECIFIED;
  }
}
