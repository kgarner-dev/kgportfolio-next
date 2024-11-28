import { ThemeToggle } from "../molecules/themetoggle"
import { Logo } from "../atoms/logo"
import { HeaderNav } from "../molecules/headernav"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full p-5 max-w-wide mx-auto">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 bg-opacity-75 backdrop-blur flex justify-between items-center shadow-xl">
                <Logo />
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <HeaderNav />
                </div>
            </div>
        </header>
    )
}