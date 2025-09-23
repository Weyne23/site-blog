import Link from "next/link"
import Image from "next/image"

export const Logo = () => {
    return (
        <Link href="/" title="Pagina Inicial">
            <Image src="/logo.svg" alt="Logo" width={116} height={32} />
        </Link>
    )
}