import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string | undefined | number;
    icon: LucideIcon;
    description?: string;
    valueColor?: string;
}

export function StatCard({ title, value, icon: Icon, valueColor }: StatCardProps) {
    return (
        <Card className="shadow-sm border-slate-200/60">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground/70" />
            </CardHeader>
            <CardContent>
                <div className={`text-2xl font-bold tracking-tight ${valueColor}`}>
                    {value}
                </div>
            </CardContent>
        </Card>
    );
}