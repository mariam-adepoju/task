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
    ecosystem: string;
    packageName: string;
}

export function VersionsTable({
    versions,
    ecosystem,
    packageName
}: VersionsTableProps) {
    const reversedVersions = [...versions].sort((a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return (
        <div className="pb-10 overflow-hidden">
            <Table className="border-b">
                <TableHeader>
                    <TableRow className="text-sm font-medium text-muted-foreground">
                        <TableHead className="p-3 gap-2">Version</TableHead>
                        <TableHead className="p-3 gap-2">Published On</TableHead>
                        <TableHead className="p-3 gap-2"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {reversedVersions.map((version, index) => {
                        const isLatest = index === 0;
                        return (
                            <TableRow key={version.version} className="text-sm text-foreground group">
                                <TableCell className="p-3 gap-2">
                                    <div className="flex items-center gap-2">
                                        <Badge className="">
                                            {version.version}
                                        </Badge>
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
                                <TableCell className="">
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