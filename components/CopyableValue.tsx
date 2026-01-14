"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface CopyableValueProps {
    value: string;
    className?: string;
}

export function CopyableValue({ value, className }: CopyableValueProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevents Link from triggering if used inside a Link
        if (value === "Not Available") return;
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={cn("group flex items-center gap-1 min-w-0", className)}>
            <span className="truncate text-foreground text-xs tracking-[0.04px]">
                {value}
            </span>

            {value !== "Not Available" && (
                <Button variant={"ghost"} size={"icon-sm"}
                    onClick={handleCopy}
                    className={cn(
                        "shrink-0 p-0! rounded transition-all",
                        "opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-slate-100"
                    )}
                    aria-label="Copy to clipboard"
                >
                    {copied ? (
                        <Check size={12} className="text-green-600" />
                    ) : (
                        <Copy size={12} className="text-slate-400" />
                    )}
                </Button>
            )}
        </div>
    );
}