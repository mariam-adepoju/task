import Header from "@/components/Header";

export default function PackageDashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full min-h-screen pt-8 px-2 bg-background">
            <div className="max-w-[1185px] mx-auto flex flex-col gap-8">
                <Header />
                <main className="w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}