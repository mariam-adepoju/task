export type PrimaryAction = "reset" | "home";
export interface ErrorConfig {
  icon: React.ReactNode;
  bg: string;
  title: string;
  description: string;
  showReset: boolean;
  primaryAction: PrimaryAction;
}
