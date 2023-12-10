import { optionsNavBar } from "./listNavigation";
import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="flex justify-between pl-4 pr-10 py-8 h-14 items-center bg-zinc-800 shadow-lg
         shadow-zinc-700">
            <h2 className="text-3xl font-bold">Oscar Beltran</h2>
            <ul className="flex gap-8 text-2xl font-semibold">
                {
                    optionsNavBar.map(({ path, name}) => (
                        <li key={path} className="hover:text-blue-800">
                            <Link to={path}>{name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
