import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { LicenseInfo } from "@/types/safedep";

interface LicenseContainer {
    licenses: LicenseInfo[];
}
interface LicenseTableProps {
    licenses: LicenseContainer | undefined | null;
}

export function LicenseTable({ licenses }: LicenseTableProps) {
    const licenseList = licenses?.licenses || [];

    return (
        <div className="rounded-md border bg-white">
            <Table>
                <TableHeader>
                    <TableRow className="hover:bg-transparent bg-slate-50/50">
                        <TableHead className="font-semibold text-slate-900">License ID</TableHead>
                        <TableHead className="font-semibold text-slate-900">License Name</TableHead>
                        <TableHead className="font-semibold text-slate-900">Reference URL</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {licenseList.length > 0 ? (
                        licenseList.map((license, idx) => (
                            <TableRow key={idx}>
                                <TableCell className="font-mono text-sm text-slate-700">
                                    {license.licenseId || "N/A"}
                                </TableCell>
                                <TableCell className="text-slate-600">
                                    {license.name || license.licenseId || "N/A"}
                                </TableCell>
                                <TableCell>
                                    {license.links?.[0] ? (
                                        <a
                                            href={license.links[0]}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-600 hover:underline text-sm truncate max-w-xs block"
                                        >
                                            {license.links[0]}
                                        </a>
                                    ) : (
                                        <span className="text-slate-400">—</span>
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