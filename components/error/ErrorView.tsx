"use client";
import { RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ErrorConfig } from "@/types/error";

interface ErrorViewProps {
    config: ErrorConfig;
    reset: () => void;
}

export function ErrorView({ config, reset }: ErrorViewProps) {
    return (
        <div
            role="alert"
            aria-live="assertive"
            className="flex items-center justify-center min-h-[70vh] px-6"
        >
            <div className="max-w-md w-full text-center space-y-6">
                <div className="flex justify-center">
                    <div className={`p-4 rounded-full ${config.bg}`}>
                        {config.icon}
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">
                        {config.title}
                    </h2>
                    <p className="text-sm text-slate-500">
                        {config.description}
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    {config.showReset && (
                        <Button onClick={reset} className="gap-2">
                            <RotateCcw className="h-4 w-4" />
                            Try again
                        </Button>
                    )}
                    <Link href="/">
                        <Button variant="ghost" className="gap-2">
                            <Home className="h-4 w-4" />
                            Back to Search
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}