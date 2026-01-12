"use client";

import { AlertCircle, WifiOff, SearchX, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    const isNetworkError = error.message.includes("NETWORK_ERROR");
    const isNotFound = error.message.includes("NOT_FOUND");

    return (
        <div className="flex items-center justify-center min-h-[70vh] px-6">
            <div className="max-w-md w-full text-center space-y-6 animate-in fade-in zoom-in duration-300">

                {/* Dynamic Icon Section */}
                <div className="flex justify-center">
                    <div className={`p-4 rounded-full ${isNetworkError ? 'bg-red-50' : 'bg-slate-100'}`}>
                        {isNetworkError ? (
                            <WifiOff className="h-12 w-12 text-red-500" />
                        ) : isNotFound ? (
                            <SearchX className="h-12 w-12 text-slate-500" />
                        ) : (
                            <AlertCircle className="h-12 w-12 text-amber-500" />
                        )}
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 font-intertight">
                        {isNetworkError ? "Connection Failed" : isNotFound ? "Package Not Found" : "Something went wrong"}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        {error.message.split(': ')[1] || "An unexpected error occurred while analyzing this package."}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <Button
                        onClick={reset}
                        variant={isNetworkError ? "default" : "outline"}
                        className="w-full sm:w-auto gap-2"
                    >
                        <RotateCcw className="h-4 w-4" />
                        Try again
                    </Button>

                    <Link href="/" className="w-full sm:w-auto">
                        <Button variant="ghost" className="w-full gap-2 text-slate-600">
                            <Home className="h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}