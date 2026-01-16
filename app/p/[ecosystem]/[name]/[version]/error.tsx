"use client";
import { useEffect } from "react";
import { getErrorConfig } from "@/components/error/errorconfig";
import { ErrorView } from "@/components/error/ErrorView";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    const config = getErrorConfig(error.message);

    useEffect(() => {
        console.error("[Package Analysis Error]", error);
    }, [error]);

    return <ErrorView config={config} reset={reset} />;
}
