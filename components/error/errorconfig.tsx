import { ErrorConfig } from "@/types/error";
import {
    AlertCircle,
    WifiOff,
    SearchX,
    Globe,
} from "lucide-react";

export function getErrorConfig(message: string): ErrorConfig {
    switch (true) {
        case message.includes("NETWORK_ERROR"):
        case message.includes("SERVICE_UNAVAILABLE"):
            return {
                icon: <WifiOff className="h-12 w-12 text-red-500" />,
                bg: "bg-red-50",
                title: "Connection Failed",
                description:
                    "We couldn't reach the analysis service. Please check your connection and try again.",
                showReset: true,
                primaryAction: "reset",
            };

        case message.includes("PACKAGE_NOT_FOUND"):
        case message.includes("NOT_FOUND"):
            return {
                icon: <SearchX className="h-12 w-12 text-slate-500" />,
                bg: "bg-slate-100",
                title: "Package Not Found",
                description:
                    "The requested package or version could not be found in this ecosystem.",
                showReset: false,
                primaryAction: "home",
            };

        case message.includes("UNSUPPORTED_ECOSYSTEM"):
            return {
                icon: <Globe className="h-12 w-12 text-amber-500" />,
                bg: "bg-amber-50",
                title: "Unsupported Ecosystem",
                description:
                    "This ecosystem is not currently supported for analysis.",
                showReset: false,
                primaryAction: "home",
            };

        default:
            return {
                icon: <AlertCircle className="h-12 w-12 text-blue-500" />,
                bg: "bg-slate-100",
                title: "Analysis Error",
                description:
                    "An unexpected error occurred while analyzing this package.",
                showReset: true,
                primaryAction: "reset",
            };
    }
}

