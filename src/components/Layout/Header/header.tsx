import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ActiveLink } from "@/components/ActiveLink";
import { Logo } from "@/components/Logo";

export const Header = () => {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Logo />

                    <nav className="flex items-center gap-6">
                        <ActiveLink href="/">Início</ActiveLink>
                        <ActiveLink href="/blog">Blog</ActiveLink>
                        <Button asChild variant="secondary">
                            <Link href="/comecar">Começar</Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}