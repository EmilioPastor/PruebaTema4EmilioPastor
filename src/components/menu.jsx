'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const menu = [
    {
        text: 'Medicos Api',
        href: '/medicos-api'
    },
    {
        text: 'Medicos BBDD',
        href: '/medicos-db'
    },
    {
        text: 'Pacientes API',
        href: '/pacientes-api'
    },
    {
        text: 'Pacientes BBDD',
        href: '/pacientes-db'
    }
]

function Menu() {
    const pathname = usePathname()

    return (
        <nav className="font-bold flex items-center gap-4 text-blue-500 ">

            {menu.map(item =>
                <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:underline ${pathname == item.href && 'text-black no-underline'}`}>

                    {item.text}
                </Link>
            )}

        </nav>
    );
}

export default Menu;