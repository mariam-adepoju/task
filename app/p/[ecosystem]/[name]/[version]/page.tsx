import { getPackageData } from "@/app/actions/get-package-data";

interface PageProps {
    params: Promise<{
        ecosystem?: string;
        name?: string;
        version?: string;
    }>;
}

export default async function PackagePage({ params }: PageProps) {
    const { ecosystem, name, version } = await params;
    if (!ecosystem || !name || !version) {
        return (
            <div className="p-6 text-center text-red-600 font-medium">
                Error: Ecosystem, package name, and version are all required.
            </div>
        );
    }
    try {
        const data = await getPackageData(ecosystem, name, version);
        return (
            <div className="space-y-6 p-6 max-w-7xl mx-auto">
                <header className="flex flex-col gap-1 border-b pb-4">
                    <h1 className="text-2xl font-bold tracking-tight">
                        {name} <span className="text-muted-foreground font-normal">v{version}</span>
                    </h1>
                    <div className="flex gap-2 text-sm uppercase text-slate-500 font-mono">
                        <span>{ecosystem}</span>
                    </div>
                </header>

                <main className="grid gap-6">
                    {/* Senior Tip: Use a separate component for the JSON preview to keep this file clean */}
                    <div className="rounded-lg border bg-slate-50 p-4">
                        <h2 className="text-sm font-semibold mb-3 text-slate-700 uppercase">Raw Analysis Data</h2>
                        <pre className="text-xs overflow-auto max-h-[500px] leading-relaxed">
                            {JSON.stringify(data, (key, value) =>
                                typeof value === 'bigint' ? value.toString() : value,
                                2)}
                        </pre>
                    </div>
                </main>
            </div>
        );
    } catch (err) {
        console.error("Critical Page Error:", err);
        return (
            <div className="p-12 text-center">
                <h2 className="text-lg font-semibold text-red-600">Failed to analyze package</h2>
                <p className="text-slate-500">Please verify the package exists in the {ecosystem} registry.</p>
            </div>
        );
    }
}