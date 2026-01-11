import Image from "next/image"
import { Button } from "./ui/button"

const Header = () => {
    return (
        <header className="flex border-red-200 border items-center justify-between">
            <div className="flex flex-col">
                <p className="text-sm text-slate-400">POWERED BY</p>
                <Image src="/safedep-logo.svg" alt="Logo" width={145} height={32} />
            </div>
            <Button className="self-end px-4 py-2 flex items-center gap-2"><Image src="/github-logo.svg" alt="logo" width={13} height={13} /><span className="text-sm font-medium leading-5">Install GitHub App</span></Button>
        </header>
    )
}

export default Header