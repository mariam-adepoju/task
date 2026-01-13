import { Badge } from "@/components/ui/badge";
import { cn, formatRiskLabel, getRiskConfig } from "@/lib/utils";

interface SeverityBadgeProps {
    risk: string;
}

export function SeverityBadge({ risk }: SeverityBadgeProps) {
    const config = getRiskConfig(risk);

    return (
        <Badge
            variant="outline"
            className={cn("capitalize border-0 font-medium text-xs rounded-lg py-0.5 px-1.5 flex items-center gap-0.5", config.styles)}
        >
            <config.icon size={12} />
            {formatRiskLabel(risk)}
        </Badge>
    );
}
