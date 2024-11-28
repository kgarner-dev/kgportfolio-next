import Image from "next/image";
import Link from "next/link";
import logo from '@/../public/logo.png'

export function Logo() {
    return (
        <Link href='/'>
            <Image
                className="object-contain object-left h-10 sm:h-12" 
                src={logo}
                alt='blueBird'
            />
        </Link>
    )
}