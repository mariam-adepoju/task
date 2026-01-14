import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { LicenseInfo } from "@/types/safedep";
import Link from "next/link";

interface LicenseContainer {
    licenses: LicenseInfo[];
}
interface LicenseTableProps {
    licenses: LicenseContainer | undefined | null;
}
export function LicenseTable({ licenses }: LicenseTableProps) {
    const licenseList = licenses?.licenses || [];
    return (
        <div className="overflow-hidden pb-10">
            <Table className="border-b">
                <TableHeader>
                    <TableRow className="text-sm font-medium text-muted-foreground [&>th]:p-2 [&>th]:md:p-3 [&>th]:gap-2">
                        <TableHead>License ID</TableHead>
                        <TableHead>License Name</TableHead>
                        <TableHead>Reference URL</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {licenseList.length > 0 ? (
                        licenseList.map((license, idx) => (
                            <TableRow key={idx} className="text-sm text-foreground group [&>td]:p-2 [&>td]:md:p-3 [&>td]:gap-2">
                                <TableCell>
                                    {license.licenseId || "N/A"}
                                </TableCell>
                                <TableCell>
                                    {license.name || license.licenseId || "N/A"}
                                </TableCell>
                                <TableCell>
                                    {license.links?.[0] ? (
                                        <Link
                                            href={license.links[0]}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="truncate"
                                        >
                                            {license.links[0]}
                                        </Link>
                                    ) : (
                                        <span className="">—</span>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center py-10 text-slate-500">
                                No license information available.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}