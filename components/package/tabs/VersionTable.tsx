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
import { useMemo } from "react";

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
    const sortedVersions = [...versions].sort((a, b) =>
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
                    {sortedVersions.map((version, index) => {
                        const isLatest = index === 0;
                        return (
                            <TableRow key={version.version} className="text-sm text-foreground group">
                                <TableCell className="p-3 gap-2">
                                    <div className="flex items-center gap-2">
                                        <Badge variant={"ghost"} className="text-xs font-medium rounded-lg p-1">
                                            {version.version}
                                        </Badge>
                                        {isLatest && (
                                            <Badge variant={"success"} className="text-xs font-medium rounded-lg py-0.5 px-1.5"
                                            >
                                                Latest
                                            </Badge>
                                        )}
                                    </div>
                                </TableCell>
                                <TableCell className="p-3 gap-2 tabular-nums">
                                    {formatDate(version.publishedAt)}
                                </TableCell>
                                <TableCell className="p-3 gap-2">
                                    <Link
                                        href={`/p/${formatEcosystem(ecosystem)}/${packageName}/${version.version}`}
                                        className="inline-flex items-center gap-1 text-sm text-primary transition-all"
                                    >
                                        <span className="group-hover:opacity-80 transition-opacity">
                                            View Version
                                        </span>
                                        <ExternalLink size={20}
                                            className={cn(
                                                "opacity-0 transition-all duration-200",
                                                "group-hover:opacity-100"
                                            )}
                                        />
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