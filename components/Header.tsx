import Image from "next/image"
import { Button } from "./ui/button"

const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <div className="flex flex-col">
                <p className="text-sm text-slate-400">POWERED BY</p>
                <Image src="https://mintcdn.com/safedep/SBr4leJ2Q_jWmTGH/images/full-logo-for-light-theme.png?fit=max&auto=format&n=SBr4leJ2Q_jWmTGH&q=85&s=c5133b0c57a88228719710fb4c94ff90" alt="Logo" width={145} height={32} priority className="h-auto w-36.25" />
            </div>
            <Button className="self-end px-4 py-2 flex items-center gap-2"><Image src="/github-logo.svg" alt="logo" width={13} height={13} /><span className="text-sm font-medium leading-5">Install GitHub App</span></Button>
        </header>
    )
}

export default Header