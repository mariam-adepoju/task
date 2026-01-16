import { Ecosystem } from "@buf/safedep_api.bufbuild_es/safedep/messages/package/v1/ecosystem_pb.js";

const ECOSYSTEM_MAP: Record<string, Ecosystem> = {
  npm: Ecosystem.NPM,
  pypi: Ecosystem.PYPI,
  go: Ecosystem.GO,
  maven: Ecosystem.MAVEN,
  rubygems: Ecosystem.RUBYGEMS,
  nuget: Ecosystem.NUGET,
  cargo: Ecosystem.CARGO,
  packagist: Ecosystem.PACKAGIST,
  composer: Ecosystem.PACKAGIST,
  terraform: Ecosystem.TERRAFORM,
  "terraform-module": Ecosystem.TERRAFORM_MODULE,
  "terraform-provider": Ecosystem.TERRAFORM_PROVIDER,
  brew: Ecosystem.HOMEBREW,
  homebrew: Ecosystem.HOMEBREW,
  github: Ecosystem.GITHUB_REPOSITORY,
  "github-actions": Ecosystem.GITHUB_ACTIONS,
  vscode: Ecosystem.VSCODE,
  "open-vsx": Ecosystem.OPENVSX,
};

export function mapEcosystem(value: string): Ecosystem {
  if (!value) return Ecosystem.UNSPECIFIED;

  const normalized = value.toLowerCase().trim();
  return ECOSYSTEM_MAP[normalized] ?? Ecosystem.UNSPECIFIED;
}
