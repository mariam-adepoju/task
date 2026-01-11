import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn, formatEcosystem, formatDate } from "@/lib/utils";
import { VersionItem } from "@/types/safedep";

interface VersionsTableProps {
    versions: VersionItem[];
    currentVersion: string;
    ecosystem: string;
    packageName: string;
}

export function VersionsTable({
    versions,
    currentVersion,
    ecosystem,
    packageName
}: VersionsTableProps) {
    const reversedVersions = [...versions].sort((a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return (
        <div className="rounded-md border bg-white overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow className="hover:bg-transparent bg-slate-50/50">
                        <TableHead className="font-semibold text-slate-900">Version</TableHead>
                        <TableHead className="font-semibold text-slate-900">Published On</TableHead>
                        <TableHead className="text-right font-semibold text-slate-900"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {reversedVersions.map((version, index) => {
                        const isCurrent = version.version === currentVersion;
                        const isLatest = index === 0;

                        return (
                            <TableRow key={version.version} className="group">
                                <TableCell className="py-4">
                                    <div className="flex items-center gap-3">
                                        <span className={cn(
                                            "text-sm transition-colors",
                                            isCurrent ? "text-blue-600 font-bold" : "text-slate-600"
                                        )}>
                                            {version.version}
                                        </span>
                                        {isLatest && (
                                            <Badge
                                                variant="secondary"
                                                className="bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-100 py-0 text-[10px] uppercase font-bold tracking-wider"
                                            >
                                                Latest
                                            </Badge>
                                        )}
                                    </div>
                                </TableCell>
                                <TableCell className="text-slate-500 font-mono text-xs">
                                    {formatDate(version.publishedAt)}
                                </TableCell>
                                <TableCell className="text-right">
                                    <Link
                                        // Using the helper to ensure the URL ecosystem matches the API expectation
                                        href={`/p/${formatEcosystem(ecosystem)}/${packageName}/${version.version}`}
                                        className={cn(
                                            "inline-flex items-center gap-1 text-xs font-semibold transition-all",
                                            "text-teal-600 hover:text-teal-700",
                                            "opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                                        )}
                                    >
                                        View Analysis
                                        <ExternalLink className="h-3 w-3" />
                                    </Link>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}