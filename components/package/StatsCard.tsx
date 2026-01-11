import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
    title: string;
    value: string | undefined | number;
    icon: LucideIcon;
    description?: string;
    valueColor?: string;
    iconColor?: string;
}

export function StatCard({ title, value, icon: Icon, valueColor, iconColor }: StatCardProps) {
    return (
        <Card className="border rounded-lg p-4 flex flex-col gap-6 ">
            <CardHeader className="flex flex-row items-center gap-2 p-0">
                <div className="p-1 rounded-lg bg-card border">
                    <Icon size={15} className={cn(iconColor || "text-primary")} />
                </div>
                <CardTitle className="text-base font-normal p-0 text-slate-500">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <div className={cn("text-3xl font-medium text-foreground", valueColor)}>
                    {value}
                </div>
            </CardContent>
        </Card>
    );
}