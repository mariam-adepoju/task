import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="container mx-auto p-6 space-y-8 animate-in fade-in duration-500">
            {/* Hero Skeleton */}
            <div className="space-y-4">
                <Skeleton className="h-10 w-1/3 bg-slate-200" />
                <Skeleton className="h-4 w-1/2 bg-slate-100" />
            </div>

            {/* Stats Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-28 w-full rounded-xl bg-slate-100" />
                ))}
            </div>

            {/* Tabs Skeleton */}
            <div className="space-y-4">
                <Skeleton className="h-12 w-full bg-slate-50" />
                <Skeleton className="h-100 w-full rounded-md bg-slate-50" />
            </div>
        </div>
    );
}