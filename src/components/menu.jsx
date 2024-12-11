'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const menu = [
    {
        text: 'Medicos Api',
        href: 'C:\Users\emili\Proyectos\pruebatema4emiliopastor\src\app\medicos-api\[id]\page.jsx'
    },
    {
        text: 'Medicos BBDD',
        href: '/medicos-db'
    },
    {
        text: 'Pacientes API',
        href: '/acerca'
    },
    {
        text: 'Pacientes BBDD',
        href: '/'
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