import Image from "next/image"
import { Button } from "./ui/button"

const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <div className="flex flex-col">
                <p>POWERED BY</p>
                <div className="">
                    <Image src="/safedep-logo.svg" alt="Logo" width={145} height={32} />
                    <h2>SafeDep</h2>
                </div>
            </div>
            <Button className="bg-primary px-4 py-2 flex items-center gap-2"><Image src="/github-logo.svg" alt="logo" width={13} height={13} /><span className="text-sm font-medium leading-5">Install GitHub App</span></Button>
        </header>
    )
}

export default Header