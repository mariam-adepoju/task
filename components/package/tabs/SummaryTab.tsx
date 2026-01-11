import { Badge } from "@/components/ui/badge";
import { formatConfidence } from "@/lib/utils";
import { MalwareReport } from "@/types/safedep";

export function SummaryTab({ malware }: { malware: MalwareReport }) {
    const inference = malware?.report?.inference;

    return (
        <div className="space-y-10">
            <section className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-0.75 bg-emerald-500 rounded-full" />
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Summary</h3>
                <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                        {inference?.summary || "This analysis was performed using vet and SafeDep Cloud Malicious Package Analysis."}
                    </p>
                    <p className="text-sm text-slate-500 italic">
                        <span className="font-semibold text-slate-700">Note:</span> This report is updated by a verification record.
                    </p>
                </div>
            </section>

            <section className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-0.75 bg-emerald-500 rounded-full" />
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Verification Record</h3>
                <p className="text-slate-600">
                    {malware?.status === "ANALYSIS_STATUS_COMPLETED"
                        ? "Manual analysis confirmed that the package is clean."
                        : "Verification pending manual review."}
                </p>
            </section>

            <section className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-0.75 bg-emerald-500 rounded-full" />
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Details</h3>
                <div className="space-y-6">
                    <div className="bg-slate-50/80 p-5 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Confidence Level</span>
                            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-100 capitalize font-bold">
                                {formatConfidence(inference?.confidence)}
                            </Badge>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {inference?.details || "No detailed evidence identified during the analysis workflow."}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}