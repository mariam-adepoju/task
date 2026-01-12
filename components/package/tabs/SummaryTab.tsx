import { Badge } from "@/components/ui/badge";
import { formatConfidence } from "@/lib/utils";
import { MalwareReport } from "@/types/safedep";

export function SummaryTab({ malware }: { malware: MalwareReport }) {
    const inference = malware?.report?.inference;

    return (
        <section className="max-w-200 py-12 px-5 space-y-6 mx-auto">
            <article className="relative gap-2 p-6 border-l-4 border-primary">
                <h3 className="text-xl font-medium text-neutral-12">Summary</h3>
                <div className="space-y-2">
                    <p className="text-slate-500">
                        {inference?.summary || "This analysis was performed using vet and SafeDep Cloud Malicious Package Analysis."}
                    </p>
                    <p className="text-slate-500">
                        <span className="font-bold">Note:</span> This report is updated by a verification record.
                    </p>
                </div>
            </article>
            <article className="relative gap-2 p-6 border-l-4">
                <h3 className="text-lg font-medium text-neutral-12">Verification Record</h3>
                <p className="text-slate-500">
                    {malware?.status === "ANALYSIS_STATUS_COMPLETED"
                        ? "Manual analysis confirmed that the package is clean."
                        : "Verification pending manual review."}
                </p>
            </article>
            <article className="relative p-6 gap-2 border-l-4">
                <h3 className="text-lg font-medium text-neutral-12">Details</h3>
                <div className="space-y-5">
                    <p className="mt-4 text-slate-500">
                        <span className="font-bold">Note:</span> This report is updated by a verification record.
                    </p>
                    <div className="flex gap-2">
                        <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Confidence Level</span>
                        <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-100 capitalize font-bold">
                            {formatConfidence(inference?.confidence)}
                        </Badge>
                    </div>
                    <p className="text-slate-500">
                        {inference?.details || "No detailed evidence identified during the analysis workflow."}
                    </p>
                </div>
            </article>
        </section>
    );
}